#!/usr/bin/env python3
"""开发用本地服务器:禁用缓存,确保每次刷新都加载最新代码。
用法:python3 serve.py   然后打开 http://localhost:5173/
"""
import http.server, socketserver

PORT = 5173

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"DBC 开发服务器(禁缓存)→ http://localhost:{PORT}/")
        httpd.serve_forever()
