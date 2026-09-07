const sessions = [
    { id: 1, title: 'Buổi 1: Tổng quan kinh tế vi mô', file: 'Day_01/index.html' },
    { id: 2, title: 'Buổi 2: Các vấn đề kinh tế cơ bản', file: 'Day_02/index.html' },
    { id: 3, title: 'Buổi 3: Thị trường và Cầu hàng hóa', file: 'Day_03/index.html' },
    { id: 4, title: 'Buổi 4: Cung hàng hóa & Cân bằng thị trường', file: 'Day_04/index.html' },
    { id: 5, title: 'Buổi 5: Độ co giãn của cung và cầu', file: 'Day_05/index.html' },
    { id: 6, title: 'Buổi 6: Lý thuyết hành vi người tiêu dùng', file: 'Day_06/index.html' },
    { id: 7, title: 'Buổi 7: Tối đa hóa hữu dụng', file: 'Day_07/index.html' },
    { id: 8, title: 'Buổi 8: Lý thuyết sản xuất', file: 'Day_08/index.html' },
    { id: 9, title: 'Buổi 9: Năng suất cận biên và hiệu thức', file: 'Day_09/index.html' },
    { id: 10, title: 'Buổi 10: Lý thuyết chi phí', file: 'Day_10/index.html' },
    { id: 11, title: 'Buổi 11: Thị trường cạnh tranh hoàn toàn', file: 'Day_11/index.html' },
    { id: 12, title: 'Buổi 12: Thị trường độc quyền hoàn toàn', file: 'Day_12/index.html' },
    { id: 13, title: 'Buổi 13: Cạnh tranh độc quyền và Độc quyền nhóm', file: 'Day_13/index.html' },
    { id: 14, title: 'Buổi 14: Thị trường yếu tố sản xuất', file: 'Day_14/index.html' },
    { id: 15, title: 'Buổi 15: Vai trò của Chính phủ', file: 'Day_15/index.html' }
];

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const menuView = document.getElementById('menu-view');
    const playerView = document.getElementById('player-view');
    const backBtn = document.getElementById('back-btn');
    const mainIframe = document.getElementById('main-iframe');
    const currentTitle = document.getElementById('current-title');

    // 1. Render Buttons
    sessions.forEach(session => {
        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <div class="session-icon">▶️</div>
            <div class="session-info">
                <h3>Buổi ${session.id}</h3>
                <p>${session.title.split(': ')[1] || session.title}</p>
            </div>
        `;
        
        // Handle Click
        card.addEventListener('click', () => {
            openPlayer(session);
        });

        videoGrid.appendChild(card);
    });

    // 2. Open Player
    function openPlayer(session) {
        currentTitle.textContent = session.title;
        mainIframe.src = session.file; // Load the HTML presentation
        
        // Animations
        menuView.classList.remove('active');
        setTimeout(() => {
            playerView.classList.add('active');
        }, 300); // Wait for fade out
    }

    // 3. Back Button
    backBtn.addEventListener('click', () => {
        mainIframe.src = ""; // Clear iframe source to stop video/audio playing in background
        playerView.classList.remove('active');
        setTimeout(() => {
            menuView.classList.add('active');
        }, 300);
    });
});
