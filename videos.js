// 视频页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const categoryTabs = document.querySelectorAll('.category-tab');
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('videoModal');
    const closeButtons = document.querySelectorAll('.close');
    const playButtons = document.querySelectorAll('.btn-play');
    const detailButtons = document.querySelectorAll('.btn-detail');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    // 视频数据
    const videosData = {
        'zengguofan-biography': {
            title: '曾国藩：从农家子弟到中兴名臣的传奇人生',
            description: '深入解析曾国藩如何从一个普通农家子弟，通过自己的努力成为晚清中兴名臣的传奇历程。本视频详细介绍了曾国藩的成长经历、求学过程、仕途发展以及他在平定太平天国运动中的重要作用。',
            duration: '45:32',
            views: '2.8M',
            likes: '156K',
            date: '2024-01-15',
            category: 'biography',
            tags: ['传记', '历史', '励志'],
            content: [
                '曾国藩的早期生活和求学经历',
                '科举考试和仕途发展',
                '创建湘军和平定太平天国',
                '晚年的政治贡献和思想影响'
            ],
            significance: '曾国藩的人生经历展现了个人奋斗与时代背景的完美结合，他的成功不仅是个人的成就，更是中国传统文化中"修身、齐家、治国、平天下"理念的生动体现。'
        },
        'zengguofan-philosophy': {
            title: '曾国藩的修身智慧：慎独、主敬、求仁、习劳',
            description: '详细解读曾国藩的四大修身要诀，以及如何在现代生活中运用这些智慧。',
            duration: '32:18',
            views: '1.9M',
            likes: '98K',
            date: '2024-01-20',
            category: 'philosophy',
            tags: ['哲学', '修身', '智慧'],
            content: [
                '慎独：独处时的自我约束',
                '主敬：对人对事的恭敬态度',
                '求仁：仁爱之心的培养',
                '习劳：勤劳习惯的养成'
            ],
            significance: '曾国藩的修身智慧对现代人的自我修养和品德提升具有重要的指导意义。'
        },
        'zengguofan-education': {
            title: '曾国藩家书：现代家庭教育的宝贵财富',
            description: '从《曾国藩家书》中提炼出适合现代家庭的教育理念和方法。',
            duration: '28:45',
            views: '1.5M',
            likes: '87K',
            date: '2024-01-25',
            category: 'education',
            tags: ['教育', '家书', '家庭'],
            content: [
                '家庭教育的基本原则',
                '子女教育的方法和技巧',
                '家庭和谐的管理智慧',
                '品德培养的重要性'
            ],
            significance: '曾国藩的教育理念体现了中国传统教育思想的精髓，对现代家庭教育仍有重要参考价值。'
        },
        'zengguofan-military': {
            title: '湘军统帅：曾国藩的军事才能与组织管理',
            description: '分析曾国藩如何创建和管理湘军，以及他的军事思想和组织管理智慧。',
            duration: '52:10',
            views: '1.2M',
            likes: '76K',
            date: '2024-02-01',
            category: 'military',
            tags: ['军事', '管理', '湘军'],
            content: [
                '湘军的创建背景和过程',
                '军事训练和组织管理方法',
                '作战策略和指挥艺术',
                '对晚清军事改革的影响'
            ],
            significance: '曾国藩的军事才能和组织管理智慧对现代管理学和领导力研究具有重要价值。'
        },
        'zengguofan-quotes': {
            title: '曾国藩经典语录：改变人生的100句话',
            description: '精选曾国藩最经典的100句话，配以现代解读，帮助理解其深刻含义。',
            duration: '15:30',
            views: '3.1M',
            likes: '189K',
            date: '2024-02-05',
            category: 'quotes',
            tags: ['语录', '经典', '智慧'],
            content: [
                '修身养性的经典语录',
                '为人处世的智慧箴言',
                '学习读书的方法指导',
                '为官从政的经验总结'
            ],
            significance: '曾国藩的经典语录浓缩了其人生智慧，对现代人的生活和学习具有重要指导意义。'
        },
        'zengguofan-documentary': {
            title: '《曾国藩传》完整纪录片：晚清中兴名臣的一生',
            description: '基于张宏杰《曾国藩传》拍摄的完整纪录片，全面展现曾国藩的传奇人生。',
            duration: '1:25:30',
            views: '2.3M',
            likes: '134K',
            date: '2024-02-10',
            category: 'documentary',
            tags: ['纪录片', '传记', '历史'],
            content: [
                '曾国藩的完整人生轨迹',
                '晚清社会的历史背景',
                '重要历史事件的详细记录',
                '对后世的影响和评价'
            ],
            significance: '这部纪录片是了解曾国藩和晚清历史的重要资料，具有重要的历史价值。'
        }
    };

    // 分类筛选功能
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新标签状态
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选视频
            videoCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 视频播放功能
    function playVideo(videoData) {
        const modalBody = videoModal.querySelector('.modal-body');
        const videoPlayer = modalBody.querySelector('.video-player');
        
        // 更新视频信息
        videoPlayer.querySelector('.video-detail-title').textContent = videoData.title;
        videoPlayer.querySelector('.meta-item:nth-child(1)').innerHTML = `<i class="fas fa-eye"></i> ${videoData.views} 次观看`;
        videoPlayer.querySelector('.meta-item:nth-child(2)').innerHTML = `<i class="fas fa-thumbs-up"></i> ${videoData.likes} 点赞`;
        videoPlayer.querySelector('.meta-item:nth-child(3)').innerHTML = `<i class="fas fa-calendar"></i> ${videoData.date}`;
        videoPlayer.querySelector('.meta-item:nth-child(4)').innerHTML = `<i class="fas fa-clock"></i> ${videoData.duration}`;
        
        // 更新视频描述
        const description = videoPlayer.querySelector('.video-detail-description');
        description.innerHTML = `
            <h3>视频简介</h3>
            <p>${videoData.description}</p>
            
            <h3>主要内容</h3>
            <ul>
                ${videoData.content.map(item => `<li>${item}</li>`).join('')}
            </ul>
            
            <h3>历史意义</h3>
            <p>${videoData.significance}</p>
        `;
        
        // 显示模态框
        videoModal.style.display = 'block';
    }

    // 播放按钮点击事件
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('.video-title').textContent;
            const videoKey = getVideoKey(videoTitle);
            const videoData = videosData[videoKey];
            
            if (videoData) {
                playVideo(videoData);
            }
        });
    });

    // 缩略图点击事件
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('.video-title').textContent;
            const videoKey = getVideoKey(videoTitle);
            const videoData = videosData[videoKey];
            
            if (videoData) {
                playVideo(videoData);
            }
        });
    });

    // 详情按钮点击事件
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('.video-title').textContent;
            const videoKey = getVideoKey(videoTitle);
            const videoData = videosData[videoKey];
            
            if (videoData) {
                playVideo(videoData);
            }
        });
    });

    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            videoModal.style.display = 'none';
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    });

    // 获取视频键值
    function getVideoKey(title) {
        const keyMap = {
            '曾国藩：从农家子弟到中兴名臣的传奇人生': 'zengguofan-biography',
            '曾国藩的修身智慧：慎独、主敬、求仁、习劳': 'zengguofan-philosophy',
            '曾国藩家书：现代家庭教育的宝贵财富': 'zengguofan-education',
            '湘军统帅：曾国藩的军事才能与组织管理': 'zengguofan-military',
            '曾国藩经典语录：改变人生的100句话': 'zengguofan-quotes',
            '《曾国藩传》完整纪录片：晚清中兴名臣的一生': 'zengguofan-documentary',
            '曾国藩的识人智慧：《冰鉴》相术解析': 'zengguofan-bingjian',
            '曾国藩的学习方法：如何高效读书和思考': 'zengguofan-study',
            '曾国藩家书中的经典名句：现代人必读的人生智慧': 'zengguofan-quotes2',
            '曾国藩的为官之道：如何在复杂环境中保持清廉': 'zengguofan-official',
            '曾国藩的人生哲学：如何在逆境中成长': 'zengguofan-philosophy2',
            '《曾国藩与晚清》历史纪录片：一个时代的缩影': 'zengguofan-documentary2'
        };
        return keyMap[title] || 'zengguofan-biography';
    }

    // 添加搜索功能
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索视频...';
    searchInput.className = 'search-input';
    
    const categoryNav = document.querySelector('.category-nav .container');
    categoryNav.appendChild(searchInput);

    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        videoCards.forEach(card => {
            const title = card.querySelector('.video-title').textContent.toLowerCase();
            const description = card.querySelector('.video-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                           description.includes(searchTerm) || 
                           tags.some(tag => tag.includes(searchTerm));
            
            if (matches) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            videoModal.style.display = 'none';
        }
        
        // Ctrl/Cmd + K 聚焦搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // 添加视频统计
    const statsContainer = document.createElement('div');
    statsContainer.className = 'videos-stats';
    
    const totalVideos = videoCards.length;
    const categories = ['biography', 'philosophy', 'education', 'military', 'quotes', 'documentary'];
    const categoryNames = {
        'biography': '生平传记',
        'philosophy': '思想智慧',
        'education': '教育理念',
        'military': '军事才能',
        'quotes': '经典语录',
        'documentary': '纪录片'
    };
    
    let statsHTML = `<h3>视频统计</h3>`;
    statsHTML += `<p style="color: #666; margin-bottom: 1rem;">总计：${totalVideos} 个视频</p>`;
    statsHTML += `<div class="stats-grid">`;
    
    categories.forEach(category => {
        const count = document.querySelectorAll(`[data-category="${category}"]`).length;
        if (count > 0) {
            statsHTML += `
                <div class="stat-item">
                    <span class="stat-number">${count}</span>
                    <div class="stat-label">${categoryNames[category]}</div>
                </div>
            `;
        }
    });
    
    statsHTML += `</div>`;
    statsContainer.innerHTML = statsHTML;
    const videosSection = document.querySelector('.videos-section .container');
    videosSection.insertBefore(statsContainer, videosSection.firstChild);

    // 添加滚动到顶部功能
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e74c3c, #f39c12);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
    `;
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // 添加视频播放统计
    let playCount = 0;
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            playCount++;
            console.log(`视频播放次数：${playCount}`);
        });
    });

    // 添加视频卡片悬停效果
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 添加视频时长格式化
    function formatDuration(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        } else {
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }
    }

    // 添加视频观看进度模拟
    function simulateVideoProgress() {
        const progressBars = document.querySelectorAll('.video-progress');
        progressBars.forEach(bar => {
            const progress = Math.random() * 100;
            bar.style.width = progress + '%';
        });
    }

    // 页面加载完成后执行
    setTimeout(simulateVideoProgress, 1000);

    // 添加视频推荐功能
    function getRecommendedVideos(currentVideoKey) {
        const currentCategory = videosData[currentVideoKey]?.category;
        const recommendations = Object.keys(videosData).filter(key => 
            key !== currentVideoKey && videosData[key].category === currentCategory
        ).slice(0, 3);
        
        return recommendations.map(key => videosData[key]);
    }

    // 添加视频分享功能
    function shareVideo(videoData) {
        const shareData = {
            title: videoData.title,
            text: videoData.description,
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('链接已复制到剪贴板！');
            });
        }
    }

    // 添加视频收藏功能
    let favorites = JSON.parse(localStorage.getItem('videoFavorites') || '[]');
    
    function toggleFavorite(videoKey) {
        const index = favorites.indexOf(videoKey);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(videoKey);
        }
        localStorage.setItem('videoFavorites', JSON.stringify(favorites));
        updateFavoriteUI();
    }
    
    function updateFavoriteUI() {
        // 更新收藏按钮状态
        const favoriteButtons = document.querySelectorAll('.btn-favorite');
        favoriteButtons.forEach(button => {
            const videoKey = button.getAttribute('data-video');
            if (favorites.includes(videoKey)) {
                button.classList.add('active');
                button.innerHTML = '<i class="fas fa-heart"></i> 已收藏';
            } else {
                button.classList.remove('active');
                button.innerHTML = '<i class="far fa-heart"></i> 收藏';
            }
        });
    }

    // 初始化收藏功能
    updateFavoriteUI();
}); 