# Package.json / file quản lý dự án
- npm init : để tạo file Package.json
- tên dự án
- các thư viện được sử dụng trong dự án
# để cài thư viện cho dự án
`npm install <ten_thu_vien>`
`npm i <ten_thu_vien>`
# để xóa (remove)
`npm uninstall <ten_thu_vien>`
# sau khi cài đặt xong thư viện
- liệt kê thư viện được cài đặt trong file package.json. <br>
- Tạo ra folder node_modules
- Tạo file package-lock.json
# so sánh package.json và package-lock.json
- package.json: liệt kê khoảng version được phép cài đặt trong dự án.
- package-lock.json: liệt kê chính xác version mà chúng ta cài đặt trong dự án.
# node-modules: quản lý tất cả các thư viện mà chúng ta đã cài trong dự án
- là 1 folder rất nặng vậy nên 
# gitignore
- loại bỏ những folder hay file không muốn commit lên git<br>
- Loại bỏ node-modules vì quá nặng để đưa lên github. <br>
# github
- git init
- git branch -M main
- git remote add origin
-git remote -v: kiểm tra chúng ta đang ở đâu
- git log giúp xem lịch sử commit
# vite
npx vite
# biên dịch file scss -> css
  [INPUT]                    [OUTPUT]
sass src/scss/index.scss dist/index.css

npx sass src/scss/index.scss dist/index.css --watch: tự động biên dịch qua css
# Thư mục public
- chứa file static: images, font, audios, icons

# 2 dev a-b
npm i: cài tất cả thư viện trong dự án
1.10.0 <version> 1.10.10
dev a: cài version 1.10.2
dev b: cài version 1.10.3

# file scss: bắt đầu bằng dấu "_"
- file đó sẽ không được biên dịch  tất cả, trừ những cái nào được tái sử dụng ở nơi khác
- Thường dùng để khai báo biến, mixin.