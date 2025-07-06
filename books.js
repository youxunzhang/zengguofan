// 书籍页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const categoryTabs = document.querySelectorAll('.category-tab');
    const bookCards = document.querySelectorAll('.book-card');
    const bookModal = document.getElementById('bookModal');
    const quoteModal = document.getElementById('quoteModal');
    const closeButtons = document.querySelectorAll('.close');
    const detailButtons = document.querySelectorAll('.btn-detail');
    const quoteButtons = document.querySelectorAll('.btn-quote');

    // 书籍数据
    const booksData = {
        'zengguofanjianshu': {
            title: '《曾国藩家书》',
            author: '曾国藩',
            year: '1860-1872',
            type: '家书家训',
            description: '《曾国藩家书》收录了曾国藩在1860年至1872年间写给家人的书信，共计约1500封。这些书信内容广泛，涉及修身、齐家、教育、为官、处世等各个方面，是研究曾国藩思想的重要资料。',
            features: [
                '修身养性：强调自我修养和道德完善',
                '家庭教育：重视子女教育和家庭和睦',
                '处世哲学：传授为人处世的智慧',
                '为官之道：分享从政经验和官场智慧'
            ],
            value: '《曾国藩家书》不仅是一部家训经典，更是中国传统文化的重要组成部分。它体现了儒家思想在近代的传承和发展，对后世产生了深远影响。',
            quotes: [
                '天下古今之庸人，皆以一惰字致败；天下古今之才人，皆以一傲字致败。',
                '慎独则心安，主敬则身强，求仁则人悦，习劳则神钦。',
                '不为圣贤，便为禽兽；不问收获，但问耕耘。'
            ]
        },
        'zengguofanjiaxun': {
            title: '《曾国藩家训》',
            author: '曾国藩',
            year: '1860-1872',
            type: '家书家训',
            description: '从家书中精选出的教育理念和家庭管理智慧，专门针对子女教育和家庭建设，体现了曾国藩深厚的家庭教育思想。',
            features: [
                '教育理念：科学的教育方法和理念',
                '家庭管理：家庭和谐的管理智慧',
                '品德培养：注重品德和人格的培养',
                '学习方法：有效的学习方法和技巧'
            ],
            value: '《曾国藩家训》是家庭教育的重要参考，体现了中国传统教育思想的精髓。',
            quotes: [
                '读书之法，在循序而渐进，熟读而精思。',
                '教子要有义方，不可溺爱。',
                '勤俭持家，和睦相处。'
            ]
        },
        'zengguofanriji': {
            title: '《曾国藩日记》',
            author: '曾国藩',
            year: '1838-1872',
            type: '日记笔记',
            description: '记录了曾国藩的日常生活、思想变化和修身过程，展现了他严格自律的精神品质和不断自我反省的人生态度。',
            features: [
                '修身记录：详细的修身过程和心得',
                '思想变化：思想发展的轨迹记录',
                '生活细节：日常生活的真实记录',
                '自我反省：不断自我反省和改进'
            ],
            value: '《曾国藩日记》是了解曾国藩内心世界和修身过程的重要资料。',
            quotes: [
                '每日三省吾身，为人谋而不忠乎？与朋友交而不信乎？传不习乎？',
                '静坐常思己过，闲谈莫论人非。',
                '吾日三省吾身，为人谋而不忠乎？'
            ]
        },
        'bingjian': {
            title: '《冰鉴》',
            author: '曾国藩',
            year: '1860年代',
            type: '哲学思想',
            description: '曾国藩的相术著作，通过观察人的相貌、举止来判断其性格和才能，体现了他的识人智慧和用人哲学。',
            features: [
                '相术理论：系统的相术理论体系',
                '识人方法：科学的识人方法和技巧',
                '用人智慧：用人的智慧和经验',
                '哲学思考：深刻的哲学思考'
            ],
            value: '《冰鉴》体现了曾国藩的识人智慧和用人哲学，对现代人力资源管理仍有启发意义。',
            quotes: [
                '相由心生，境随心转。',
                '观人于微，察人于细。',
                '用人如器，各取所长。'
            ]
        },
        'xiushenyaojue': {
            title: '《修身要诀》',
            author: '曾国藩',
            year: '1860年代',
            type: '哲学思想',
            description: '总结曾国藩的修身方法和理念，包括"慎独"、"主敬"、"求仁"、"习劳"等修身要诀，是理解其思想体系的重要著作。',
            features: [
                '修身方法：系统的修身方法体系',
                '道德理念：深刻的道德理念',
                '实践指导：具体的实践指导',
                '思想体系：完整的思想体系'
            ],
            value: '《修身要诀》是曾国藩修身思想的集中体现，对现代人的自我修养仍有重要指导意义。',
            quotes: [
                '慎独则心安，主敬则身强。',
                '求仁则人悦，习劳则神钦。',
                '修身齐家治国平天下。'
            ]
        },
        'xiangjunzhi': {
            title: '《湘军志》',
            author: '曾国藩',
            year: '1853-1864',
            type: '军事著作',
            description: '记录湘军的创建、训练、作战和管理经验，体现了曾国藩的军事思想和组织管理能力，对晚清军事改革产生重要影响。',
            features: [
                '军事理论：系统的军事理论',
                '组织管理：有效的组织管理方法',
                '训练方法：科学的训练方法',
                '作战经验：丰富的作战经验'
            ],
            value: '《湘军志》是研究晚清军事史的重要资料，体现了曾国藩的军事才能。',
            quotes: [
                '兵者，国之大事，死生之地，存亡之道，不可不察也。',
                '知己知彼，百战不殆。',
                '兵贵神速，机不可失。'
            ]
        },
        'zouzheji': {
            title: '《奏折集》',
            author: '曾国藩',
            year: '1838-1872',
            type: '军事著作',
            description: '收录曾国藩向朝廷呈递的奏折，内容涉及政治、军事、经济、教育等各个方面，是研究晚清政治史的重要资料。',
            features: [
                '政治思想：深刻的政治思想',
                '军事策略：高明的军事策略',
                '经济政策：合理的经济政策',
                '教育改革：先进的教育改革'
            ],
            value: '《奏折集》是研究晚清政治史和曾国藩政治思想的重要资料。',
            quotes: [
                '为政以德，譬如北辰，居其所而众星共之。',
                '民为邦本，本固邦宁。',
                '政者，正也。子帅以正，孰敢不正？'
            ]
        },
        'zengguofanquanji': {
            title: '《曾国藩全集》',
            author: '曾国藩',
            year: '现代汇编',
            type: '全集汇编',
            description: '收录了曾国藩的奏折、书信、诗文、日记等各类作品，是研究曾国藩思想和晚清历史的最全面资料。',
            features: [
                '全面收录：全面的作品收录',
                '系统整理：系统的整理和分类',
                '权威版本：权威的版本和注释',
                '研究价值：重要的研究价值'
            ],
            value: '《曾国藩全集》是研究曾国藩思想和晚清历史的最权威资料。',
            quotes: [
                '立德、立功、立言，三不朽也。',
                '天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣。',
                '学而时习之，不亦说乎？'
            ]
        }
    };

    // 分类筛选功能
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新标签状态
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选书籍
            bookCards.forEach(card => {
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

    // 书籍详情模态框
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookCard = this.closest('.book-card');
            const bookTitle = bookCard.querySelector('.book-title').textContent;
            const bookKey = getBookKey(bookTitle);
            const bookData = booksData[bookKey];
            
            if (bookData) {
                showBookDetail(bookData);
                bookModal.style.display = 'block';
            }
        });
    });

    // 经典语录模态框
    quoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookCard = this.closest('.book-card');
            const bookTitle = bookCard.querySelector('.book-title').textContent;
            const bookKey = getBookKey(bookTitle);
            const bookData = booksData[bookKey];
            
            if (bookData) {
                showBookQuotes(bookData);
                quoteModal.style.display = 'block';
            }
        });
    });

    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            bookModal.style.display = 'none';
            quoteModal.style.display = 'none';
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === bookModal) {
            bookModal.style.display = 'none';
        }
        if (event.target === quoteModal) {
            quoteModal.style.display = 'none';
        }
    });

    // 显示书籍详情
    function showBookDetail(bookData) {
        const modalBody = bookModal.querySelector('.modal-body');
        const bookDetail = modalBody.querySelector('.book-detail');
        
        // 更新书籍信息
        bookDetail.querySelector('.book-detail-title').textContent = bookData.title;
        bookDetail.querySelector('.meta-item:nth-child(1)').textContent = `作者：${bookData.author}`;
        bookDetail.querySelector('.meta-item:nth-child(2)').textContent = `年代：${bookData.year}`;
        bookDetail.querySelector('.meta-item:nth-child(3)').textContent = `类型：${bookData.type}`;
        
        // 更新描述
        const description = bookDetail.querySelector('.book-detail-description');
        description.innerHTML = `
            <h3>内容简介</h3>
            <p>${bookData.description}</p>
            
            <h3>主要特点</h3>
            <ul>
                ${bookData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3>历史价值</h3>
            <p>${bookData.value}</p>
        `;
    }

    // 显示书籍语录
    function showBookQuotes(bookData) {
        const modalBody = quoteModal.querySelector('.modal-body');
        const quotesContainer = modalBody.querySelector('.quotes-container');
        
        quotesContainer.innerHTML = bookData.quotes.map(quote => `
            <div class="quote-item">
                <blockquote>${quote}</blockquote>
                <cite>— ${bookData.title}</cite>
            </div>
        `).join('');
    }

    // 获取书籍键值
    function getBookKey(title) {
        const keyMap = {
            '《曾国藩家书》': 'zengguofanjianshu',
            '《曾国藩家训》': 'zengguofanjiaxun',
            '《曾国藩日记》': 'zengguofanriji',
            '《冰鉴》': 'bingjian',
            '《修身要诀》': 'xiushenyaojue',
            '《湘军志》': 'xiangjunzhi',
            '《奏折集》': 'zouzheji',
            '《曾国藩全集》': 'zengguofanquanji',
            '《曾国藩文选》': 'zengguofanwenxuan'
        };
        return keyMap[title] || 'zengguofanjianshu';
    }

    // 添加搜索功能
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索书籍...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px 20px;
        border: 2px solid #e74c3c;
        border-radius: 25px;
        font-size: 1rem;
        margin: 0 auto 2rem;
        display: block;
        outline: none;
        transition: all 0.3s ease;
    `;

    const categoryNav = document.querySelector('.category-nav .container');
    categoryNav.appendChild(searchInput);

    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const description = card.querySelector('.book-description').textContent.toLowerCase();
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
            bookModal.style.display = 'none';
            quoteModal.style.display = 'none';
        }
        
        // Ctrl/Cmd + K 聚焦搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // 添加书籍统计
    const statsContainer = document.createElement('div');
    statsContainer.className = 'books-stats';
    statsContainer.style.cssText = `
        text-align: center;
        margin: 2rem 0;
        padding: 1rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    `;
    
    const totalBooks = bookCards.length;
    const categories = ['letters', 'diary', 'philosophy', 'military', 'collected'];
    const categoryNames = {
        'letters': '家书家训',
        'diary': '日记笔记',
        'philosophy': '哲学思想',
        'military': '军事著作',
        'collected': '全集汇编'
    };
    
    let statsHTML = `<h3 style="color: #2c3e50; margin-bottom: 1rem;">书籍统计</h3>`;
    statsHTML += `<p style="color: #666; margin-bottom: 0.5rem;">总计：${totalBooks} 本著作</p>`;
    
    categories.forEach(category => {
        const count = document.querySelectorAll(`[data-category="${category}"]`).length;
        if (count > 0) {
            statsHTML += `<span style="display: inline-block; margin: 0.5rem; padding: 5px 12px; background: #e8f4fd; color: #3498db; border-radius: 15px; font-size: 0.9rem;">${categoryNames[category]}：${count}本</span>`;
        }
    });
    
    statsContainer.innerHTML = statsHTML;
    const booksSection = document.querySelector('.books-section .container');
    booksSection.insertBefore(statsContainer, booksSection.firstChild);

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
}); 