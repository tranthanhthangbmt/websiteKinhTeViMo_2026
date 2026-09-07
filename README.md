# Giáo án Kinh tế vi mô

Đây là trang web dạng Single Page Application (SPA) tĩnh, được xây dựng từ giáo án "Kinh tế vi mô" định dạng dọc. Trang web chia nội dung theo từng buổi học, có tích hợp chức năng tìm kiếm và hiển thị tóm tắt "Nội dung đề cương môn học" cho mỗi buổi.

## Cấu trúc thư mục

- `index.html`: Cấu trúc trang web chính.
- `styles.css`: Giao diện (UI) hiện đại, hỗ trợ responsive.
- `logic.js`: Xử lý việc load dữ liệu JSON và điều hướng động.
- `data.json`: Dữ liệu bài giảng đã được bóc tách từ HTML.
- `assets/images/`: Thư mục chứa hình ảnh bài giảng.

## Hướng dẫn đưa lên GitHub Pages

Để xuất bản trang web này lên mạng hoàn toàn miễn phí bằng GitHub Pages, hãy làm theo các bước sau:

1. Đăng nhập vào [GitHub](https://github.com/).
2. Tạo một Repository mới (ví dụ: `giao-an-vi-mo`). Đảm bảo repository ở chế độ Public.
3. Upload toàn bộ các file trong thư mục này (bao gồm `index.html`, `styles.css`, `logic.js`, `data.json`, và thư mục `assets`) lên repository vừa tạo.
4. Trên GitHub, vào mục **Settings** của repository đó.
5. Tìm mục **Pages** ở menu bên trái (hoặc kéo xuống phần GitHub Pages).
6. Ở mục **Build and deployment** -> **Source**, chọn nhánh `main` (hoặc `master`), thư mục `/(root)` và nhấn **Save**.
7. Đợi một vài phút, GitHub sẽ hiển thị đường link trang web của bạn ở ngay phần trên cùng của mục Pages (ví dụ: `https://<username>.github.io/giao-an-vi-mo/`).

Chúc bạn có một trang web bài giảng đẹp mắt và hữu ích!
