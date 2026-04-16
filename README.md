# 🛡️ SC-900 Exam Prep (Ôn tập SC-900)

<div align="center">
  <p>A smart, browser-based Single Page Application (SPA) designed to help you prepare for the <strong>Microsoft SC-900 (Security, Compliance, and Identity Fundamentals)</strong> certification. Integrated with Gemini AI for endless practice and intelligent performance analysis.</p>

  <p><em>Một ứng dụng Web SPA thông minh chạy trực tiếp trên trình duyệt, được thiết kế để giúp bạn ôn thi chứng chỉ <strong>Microsoft SC-900</strong>. Tích hợp AI Gemini để tạo đề tự động và phân tích năng lực thông minh.</em></p>
</div>

---

## 🌍 Table of Contents (Mục lục)

1. [Project Overview (Tổng quan dự án)](#project-overview-tổng-quan-dự-án)
2. [Features (Tính năng chính)](#features-tính-năng-chính)
3. [Installation (Cài đặt)](#installation-cài-đặt)
4. [Usage Examples (Hướng dẫn sử dụng)](#usage-examples-hướng-dẫn-sử-dụng)

---

## 📖 Project Overview (Tổng quan dự án)

### 🇺🇸 English
This project is a lightweight, frontend-only application built using Vanilla JavaScript, HTML5, Tailwind CSS, and DaisyUI. It requires no backend or build process. The application relies on a static question bank (`data.js`) for standard tests and leverages the Google Gemini API to generate purely dynamic, AI-crafted questions. Data persistence is handled entirely via the browser's Local Storage.

### 🇻🇳 Tiếng Việt
Dự án này là một ứng dụng tĩnh (frontend-only) cực kỳ gọn nhẹ, được xây dựng hoàn toàn bằng Vanilla JavaScript, HTML5 cùng với thư viện giao diện Tailwind CSS và DaisyUI. Không yêu cầu xử lý Backend hay bất kỳ hệ thống Build nào. Ứng dụng dựa vào một tập ngân hàng câu hỏi sẵn có (`data.js`) cho các bài thi cơ bản và tận dụng Google Gemini API để tự động sinh các câu hỏi ngẫu nhiên bằng AI. Dữ liệu lịch sử học tập được lưu trữ hoàn toàn qua trình duyệt (Local Storage).

---

## ✨ Features (Tính năng chính)

### 🇺🇸 English
- 📝 **DUMP Practice Mode**: Replicates the exam environment by picking 40 random questions from a provided database. Includes immediate grading and detailed explanations.
- 🤖 **AI-Generated Practice**: Avoid question memorization by dynamically generating fresh, unique SC-900 questions via the Gemini API.
- 📊 **History & Analytics**: Saves test attempts locally. Includes Import/Export (JSON) capabilities.
- 🧠 **AI Performance Review**: Analyzes your detailed test history using Gemini AI to pinpoint weak domains and summarize areas of compliance/security needing attention.

### 🇻🇳 Tiếng Việt
- 📝 **Luyện tập đề cơ sở (DUMP)**: Mô phỏng môi trường thi bằng cách tự động chọn 40 câu hỏi ngẫu nhiên từ thư viện đề. Chấm điểm lập tức và gợi ý giải thích chi tiết.
- 🤖 **Luyện tập cùng AI (AI Practice)**: Tránh việc học vẹt bằng cách yêu cầu hệ thống gọi Gemini API tạo ra các bài thi SC-900 mới hoàn toàn.
- 📊 **Lịch sử & Phân tích**: Lưu trữ lịch sử bài làm cục bộ. Hỗ trợ Xuất/Nhập dữ liệu (Import/Export JSON).
- 🧠 **Cố vấn AI (Analytics)**: Dùng Gemini AI đánh giá tổng hợp các bài đã làm để tìm ra những lỗ hổng kiến thức, phân loại yếu điểm theo từng nhóm nội dung SC-900.

---

## ⚙️ Installation (Cài đặt)

### 🇺🇸 English
Because this is a pure HTML/JS project utilizing CDN links for styling, there are **no dependencies to install**.
1. Clone the repository or download the source code:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project folder.
3. Simply open `index.html` in any modern web browser (Google Chrome, Edge, Firefox, Brave).
*(Note: An active internet connection is required to load Tailwind CSS / DaisyUI resources and to use the Gemini AI features).*

### 🇻🇳 Tiếng Việt
Vì đây là một dự án HTML/JS thuần túy dùng CDN để lấy thư viện giao diện, **không cần cài đặt bất kì dependencies nào**.
1. Clone repository hoặc tải trực tiếp mã nguồn về máy:
   ```bash
   git clone <repository_url>
   ```
2. Mở thư mục dự án vừa tải về.
3. Click đúp chuột để mở trực tiếp file `index.html` vào bất kỳ trình duyệt web hiện đại nào (Google Chrome, Edge, Brave,...).
*(Lưu ý: Thiết bị cần có kết nối Internet để tải file CSS của thư viện Tailwind/DaisyUI và để kết nối đến AI Gemini).*

---

## 🚀 Usage Examples (Hướng dẫn sử dụng)

### 🇺🇸 English
1. **Start Screen**: Enter your name to enter the application.
2. **Practice (DUMP)**: 
   - Navigate to the `Luyện tập (DUMP)` tab.
   - Click **Làm bài thi thử** to spawn an exam.
   - Answer the multiple-choice/true-false questions. A status block tracks your progress.
   - Click **Hoàn thành** (Finish) to grade the test instantly.
3. **Practice (AI)**:
   - Navigate to the `Luyện tập (AI)` tab.
   - Enter your personal **Gemini API Key**.
   - Click **🚀 Tạo bộ đề & Bắt đầu** to start a generated exam.
4. **History & Analyze**:
   - Navigate to `Lịch sử làm bài`.
   - View previous grades. Click on a test ID to see question-by-question feedback.
   - Input your Gemini API key and click **🔍 Phân tích kết quả** to let the AI process your overall weak points.

### 🇻🇳 Tiếng Việt
1. **Màn hình chính**: Nhập tên của bạn để bắt đầu ứng dụng.
2. **Ôn tập lý thuyết (DUMP)**:
   - Truy cập thẻ `Luyện tập (DUMP)`.
   - Ấn **Làm bài thi thử** để hệ thống bốc ngẫu nhiên 40 câu hỏi.
   - Trả lời các câu trắc nghiệm. Khung theo dõi (Status) bên phải sẽ đếm số câu đã chọn.
   - Ấn **Hoàn thành** để hệ thống lập tức báo đúng/sai và lời giải thích.
3. **Luyện tập AI (AI Practice)**:
   - Sang thẻ `Luyện tập (AI)`.
   - Nhập **Gemini API Key** (Lấy miễn phí tại Google AI Studio).
   - Bấm **🚀 Tạo bộ đề & Bắt đầu** để hệ thống gọi AI tạo sinh câu hỏi và làm bài tương tự như trên.
4. **Lịch sử & Đánh giá (History)**:
   - Xem tổng quan các lần thi cũ ở tab `Lịch sử làm bài`.
   - Bấm vào ID của mã bài thi để xem lại mình đã sai những câu nào.
   - Nhập API Key ở phần Phân tích kết quả, và ấn **🔍 Phân tích kết quả** để trợ lý ảo AI phân tích mảng kiến thức bạn đang còn hổng dựa trên dữ liệu các kỳ thi trước.
