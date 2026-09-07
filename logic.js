let sessionsData = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    setupMobileMenu();
    setupSearch();
});

async function fetchData() {
    try {
        const response = await fetch('data.json');
        sessionsData = await response.json();
        renderSessionList(sessionsData);
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('lessonContent').innerHTML = `
            <div class="welcome-message">
                <h2>Lỗi tải dữ liệu</h2>
                <p>Không thể tải dữ liệu giáo án. Hãy đảm bảo bạn đang chạy qua một local server (vd: Live Server).</p>
            </div>
        `;
    }
}

function renderSessionList(sessions) {
    const listElement = document.getElementById('sessionList');
    listElement.innerHTML = '';
    
    if (sessions.length === 0) {
        listElement.innerHTML = '<div style="padding: 16px; color: var(--text-muted);">Không tìm thấy buổi học nào.</div>';
        return;
    }

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'session-item';
        item.innerHTML = `<h3>${session.title}</h3>`;
        item.onclick = () => {
            // Remove active class from all
            document.querySelectorAll('.session-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            loadSession(session);
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        };
        listElement.appendChild(item);
    });
}

function loadSession(session) {
    const contentElement = document.getElementById('lessonContent');
    const titleElement = document.getElementById('currentSessionTitle');
    const highlightBox = document.getElementById('syllabusHighlight');
    const topicsList = document.getElementById('topicsList');
    
    // Smooth transition effect
    document.querySelector('.content-wrapper').style.display = 'block';
    contentElement.style.opacity = '0.5';
    
    setTimeout(() => {
        titleElement.textContent = session.title;
        
        // Extract session ID to format as Day_XX
        const match = session.title.match(/Buổi\s*(\d+)/i);
        let dayStr = "01";
        if (match) {
            dayStr = match[1].padStart(2, '0');
        }
        
        const videoIframe = `
        <div style="margin-bottom: 2rem; width: 100%; height: 70vh; min-height: 400px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); background: #000; position: relative;">
            <button onclick="document.querySelector('.content-wrapper').style.display='none'; document.getElementById('sidebar').classList.add('open');" style="position: absolute; top: 10px; left: 10px; z-index: 10; padding: 8px 16px; background: rgba(0,0,0,0.6); color: white; border: none; border-radius: 8px; cursor: pointer;">⬅ Quay lại Menu</button>
            <iframe src="Video/Day_${dayStr}/index.html" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
        `;
        
        contentElement.innerHTML = videoIframe + session.html;
        
        // Handle syllabus topics
        if (session.topics && session.topics.length > 0) {
            highlightBox.style.display = 'block';
            topicsList.innerHTML = session.topics.map(topic => `<li>${topic}</li>`).join('');
        } else {
            highlightBox.style.display = 'none';
        }
        
        contentElement.style.opacity = '1';
        
        // Scroll to top
        document.querySelector('.content-wrapper').scrollTop = 0;
    }, 150);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = sessionsData.filter(s => 
            s.title.toLowerCase().includes(term) || 
            (s.topics && s.topics.some(t => t.toLowerCase().includes(term)))
        );
        renderSessionList(filtered);
    });
}

function setupMobileMenu() {
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    window.openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
    };
    
    window.closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    };
    
    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
}
