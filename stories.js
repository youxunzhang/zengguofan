// 故事页面交互脚本

// 故事数据
const storiesData = [
    // 童年轶事 (1-10)
    {
        id: 1,
        title: '"笨小孩"的逆袭',
        category: 'childhood',
        time: '约2分钟',
        excerpt: '曾国藩小时候被邻居称为"笨小孩"，一次小偷到他家偷东西，躲在房梁上，曾国藩在下面读书，小偷等了一夜，曾国藩也读了一夜...',
        content: `曾国藩小时候被邻居称为"笨小孩"，因为他反应比较慢，说话也不够伶俐。但是，这个"笨小孩"却有着惊人的毅力和专注力。

一次，一个小偷潜入曾国藩家，准备偷东西。小偷躲在房梁上，等待夜深人静时下手。然而，曾国藩正在下面读书，一直读到深夜。

小偷等啊等，曾国藩也读啊读。小偷心想："这个孩子怎么这么用功？"一直等到天亮，曾国藩还在读书。小偷被曾国藩的勤奋所感动，最终没有偷东西，而是悄悄离开了。

这个故事传开后，人们开始对曾国藩刮目相看。虽然反应慢，但他的勤奋和专注力却是常人难以企及的。正是这种"笨鸟先飞"的精神，让曾国藩最终成为了一代名臣。

这个故事告诉我们：天赋固然重要，但后天的努力和坚持更加关键。曾国藩用自己的行动证明了"勤能补拙"的道理。`,
        tags: ['勤奋', '坚持', '毅力']
    },
    {
        id: 2,
        title: '背书的秘密',
        category: 'childhood',
        time: '约3分钟',
        excerpt: '曾国藩背书时有个习惯，一定要把书背得滚瓜烂熟才肯睡觉。一次背《论语》，背到半夜还没背完，母亲心疼地劝他休息...',
        content: `曾国藩背书有一个独特的习惯：一定要把书背得滚瓜烂熟才肯睡觉。他认为，只有真正掌握了知识，才能安心休息。

一次，曾国藩在背《论语》，背到半夜还没背完。母亲心疼地劝他："孩子，已经很晚了，明天再背吧。"曾国藩摇摇头说："母亲，我还没有背熟，不能睡觉。"

母亲说："你已经背了很多遍了，应该差不多了。"曾国藩坚持说："不行，我要背到能够倒背如流才行。"

就这样，曾国藩一直背到天亮，终于把《论语》背得滚瓜烂熟。这种刻苦学习的精神，让他在学业上取得了巨大的进步。

后来，曾国藩总结自己的学习方法时说："读书要有恒心，不可一日间断。每日读几页书，积少成多，终有所成。"

这个故事体现了曾国藩对学习的严格要求和对知识的渴望。他相信，只有通过不断的重复和练习，才能真正掌握知识。`,
        tags: ['学习方法', '毅力', '专注']
    },
    {
        id: 3,
        title: '第一次写诗',
        category: 'childhood',
        time: '约2分钟',
        excerpt: '曾国藩七岁时第一次写诗，题目是《咏雪》。父亲看后说："诗写得不错，但字写得不好。"从此曾国藩开始苦练书法...',
        content: `曾国藩七岁时，第一次尝试写诗。当时正值冬天，雪花纷飞，他便以《咏雪》为题写了一首诗。

诗的内容虽然简单，但意境不错，体现了小曾国藩对自然美的感受。父亲看后，先是表扬了诗的意境，但接着又说："诗写得不错，但字写得不好。"

这句话深深触动了曾国藩。他意识到，不仅要会写诗，还要把字写好。从此，曾国藩开始苦练书法，每天都要练习几个时辰。

他练习书法的方法也很特别：先用清水在石板上写，等水干了再写，这样可以反复练习而不浪费纸张。经过长期的练习，曾国藩的书法水平有了很大提高。

后来，曾国藩的书法成为了他的特长之一，被誉为"曾体"。这个故事告诉我们：细节决定成败，即使是写字这样的小事，也要认真对待。

曾国藩常说："天下事，必作于细。"正是这种对细节的重视，让他在各个方面都追求完美。`,
        tags: ['文学天赋', '书法', '细节']
    },
    {
        id: 4,
        title: '岳麓书院的求学岁月',
        category: 'study',
        time: '约4分钟',
        excerpt: '在岳麓书院求学期间，曾国藩每天天不亮就起床读书，晚上点灯到深夜。他的勤奋让同学们都感到敬佩...',
        content: `岳麓书院是湖南最著名的书院，也是曾国藩求学的重要地方。在这里，曾国藩度过了他人生中最重要的一段求学时光。

在岳麓书院，曾国藩每天天不亮就起床读书。当其他同学还在睡觉时，他已经开始了一天的学习。晚上，当其他同学都休息了，他还在点灯读书到深夜。

他的勤奋让同学们都感到敬佩。有一次，一个同学问他："你为什么这么用功？"曾国藩回答说："我天资不高，只有比别人多花时间，才能有所成就。"

在岳麓书院，曾国藩不仅学习儒家经典，还广泛涉猎其他书籍。他特别重视历史的学习，认为"读史可以明智"。

他还经常与同学们讨论学问，互相切磋。正是在这种良好的学习氛围中，曾国藩的学问有了很大的进步。

后来，曾国藩回忆在岳麓书院的时光时说："那是我人生中最充实的一段时光，虽然辛苦，但收获很大。"`,
        tags: ['岳麓书院', '勤奋好学', '学习方法']
    },
    {
        id: 5,
        title: '中进士的喜悦',
        category: 'study',
        time: '约3分钟',
        excerpt: '1838年，曾国藩中进士的消息传到家乡，全家人欣喜若狂。但曾国藩却很平静，他说："这只是开始，不是终点。"...',
        content: `1838年，曾国藩中进士的消息传到家乡，全家人欣喜若狂。这是家族的大事，意味着曾国藩正式进入了仕途。

然而，当家人都在庆祝时，曾国藩却很平静。他对家人说："这只是开始，不是终点。中进士只是获得了做官的资格，真正的考验还在后面。"

这种冷静的态度让家人感到意外。但曾国藩解释说："做官不是为了享受，而是为了报效国家，造福百姓。如果只是为了个人利益，那就失去了做官的意义。"

中进士后，曾国藩并没有立即做官，而是继续在翰林院学习。他认为，做官之前要先修身养性，提高自己的品德和才能。

这种态度体现了曾国藩的远大志向和高尚品格。他深知，真正的成功不在于获得什么职位，而在于能为国家和人民做出什么贡献。

后来，曾国藩确实用自己的行动证明了这一点。他不仅是一个好官，更是一个为国为民的好官。`,
        tags: ['科举', '谦虚', '志向']
    },
    {
        id: 6,
        title: '与左宗棠的友谊',
        category: 'study',
        time: '约5分钟',
        excerpt: '在岳麓书院，曾国藩与左宗棠成为好友。两人经常一起讨论学问，虽然后来政见不同，但友谊一直保持...',
        content: `在岳麓书院求学期间，曾国藩与左宗棠成为了好友。两人都是湖南的杰出人才，有着共同的理想和抱负。

他们经常一起讨论学问，切磋技艺。左宗棠性格直爽，才华横溢；曾国藩性格稳重，做事谨慎。两人性格互补，成为了很好的朋友。

他们一起读书，一起讨论国家大事，一起畅想未来。虽然两人的性格和处事方式不同，但这并不影响他们的友谊。

后来，两人都成为了朝廷重臣，但由于政见不同，在朝堂上经常有分歧。然而，他们始终保持着对彼此的尊重和友谊。

曾国藩曾经说过："左季高（左宗棠的字）是我的老朋友，虽然我们在某些问题上看法不同，但这不影响我们的友谊。"

左宗棠也曾经说过："曾涤生（曾国藩的字）是我的良师益友，我从他身上学到了很多东西。"

这种友谊体现了真正的君子之交：虽然政见不同，但能够互相尊重，保持友谊。这也是中国传统文化中"和而不同"精神的体现。`,
        tags: ['友谊', '左宗棠', '君子之交']
    },
    {
        id: 7,
        title: '"慎独"的实践',
        category: 'character',
        time: '约3分钟',
        excerpt: '曾国藩每天都要写日记，记录自己的言行。一次在日记中写道："今日独处时，心中有一丝邪念，立即警醒，不敢放纵。"...',
        content: `"慎独"是儒家思想中的重要概念，意思是即使在独处时也要谨慎，不能放纵自己。曾国藩是"慎独"的忠实实践者。

他每天都要写日记，记录自己的言行，特别是独处时的思想和行为。通过这种方式，他不断反省自己，提高自己的品德。

一次，曾国藩在日记中写道："今日独处时，心中有一丝邪念，立即警醒，不敢放纵。"这种自我反省的精神，让他在品德修养上不断进步。

他认为，真正的君子应该做到"慎独"，即在没有人监督的情况下，也能严格要求自己，不做违背道德的事情。

曾国藩的"慎独"实践不仅体现在思想上，也体现在行动上。他严格要求自己的言行，即使在独处时也不放松对自己的要求。

这种精神对后人产生了深远的影响。许多人都以曾国藩为榜样，学习他的"慎独"精神，提高自己的品德修养。`,
        tags: ['慎独', '自省', '品德修养']
    },
    {
        id: 8,
        title: '拒绝贿赂',
        category: 'character',
        time: '约3分钟',
        excerpt: '在担任礼部侍郎时，有人送来重金贿赂，希望曾国藩在科举考试中照顾他的儿子。曾国藩严词拒绝...',
        content: `在担任礼部侍郎期间，曾国藩负责科举考试的事务。一次，有人送来重金贿赂，希望曾国藩在科举考试中照顾他的儿子。

面对这种诱惑，曾国藩严词拒绝。他说："科举考试是国家选拔人才的大事，关系到国家的未来。我不能因为个人私利而损害国家的利益。"

他还说："如果我接受了贿赂，就是对其他考生的不公平，也是对国家的背叛。这种事情我绝对不能做。"

这个人的儿子最终没有通过科举考试，但曾国藩的行为赢得了人们的尊重。人们称赞他是一个廉洁正直的好官。

后来，曾国藩在给家人的信中写道："做官要廉洁，不能贪图私利。只有廉洁的官员，才能得到人民的信任和尊重。"

这个故事体现了曾国藩的廉洁品格和正直品格。他用自己的行动证明了什么是真正的君子品格。`,
        tags: ['廉洁', '正直', '品格']
    },
    {
        id: 9,
        title: '"主敬"的体现',
        category: 'character',
        time: '约2分钟',
        excerpt: '曾国藩无论见什么人，都保持恭敬的态度。即使是见普通百姓，也要整理衣冠，以礼相待...',
        content: `"主敬"是曾国藩修身的重要原则之一，意思是无论做什么事情都要保持恭敬的态度。曾国藩在日常生活中严格实践这一原则。

无论见什么人，曾国藩都保持恭敬的态度。即使是见普通百姓，他也要整理衣冠，以礼相待。他认为，每个人都应该得到尊重。

在与人交往时，曾国藩总是彬彬有礼，不摆架子。即使是面对下属，他也保持礼貌和尊重。这种态度赢得了人们的爱戴。

在处理公务时，曾国藩也保持恭敬的态度。他认真对待每一项工作，不敷衍了事。他认为，做官是为人民服务，必须认真负责。

曾国藩的"主敬"精神不仅体现在待人接物上，也体现在对待工作的态度上。他用自己的行动诠释了什么是真正的恭敬。

这种精神对后人产生了深远的影响。许多人学习曾国藩的"主敬"精神，提高自己的修养和品格。`,
        tags: ['主敬', '礼仪', '修养']
    },
    {
        id: 10,
        title: '"求仁"的实践',
        category: 'character',
        time: '约4分钟',
        excerpt: '曾国藩经常帮助贫困的读书人，为他们提供食宿和书籍。他说："读书人应该互相帮助，这是仁心的体现。"...',
        content: `"求仁"是儒家思想的核心，也是曾国藩修身的重要目标。他认为，做人要有仁心，要关心他人，帮助他人。

曾国藩经常帮助贫困的读书人，为他们提供食宿和书籍。他说："读书人应该互相帮助，这是仁心的体现。我们读书不是为了自己，而是为了报效国家，造福百姓。"

在担任官员期间，曾国藩经常关心百姓的疾苦，尽力帮助他们解决困难。他认为，做官就是要为人民服务，要有一颗仁心。

在处理政务时，曾国藩总是从百姓的利益出发，考虑问题。他反对那些损害百姓利益的政策，支持那些有利于百姓的政策。

曾国藩的"求仁"精神不仅体现在行动上，也体现在思想上。他经常思考如何更好地为人民服务，如何让更多的人受益。

这种精神对后人产生了深远的影响。许多人学习曾国藩的"求仁"精神，关心他人，帮助他人，为社会做出贡献。`,
        tags: ['求仁', '助人', '仁心']
    },
    {
        id: 11,
        title: '给儿子的家书',
        category: 'family',
        time: '约3分钟',
        excerpt: '曾国藩给儿子曾纪泽写信说："读书要有恒心，不可一日间断。每日读几页书，积少成多，终有所成。"...',
        content: `曾国藩非常重视家庭教育，经常给儿子写信，传授人生经验和学习心得。在给儿子曾纪泽的信中，他详细阐述了读书的方法和态度。

他写道："读书要有恒心，不可一日间断。每日读几页书，积少成多，终有所成。不要贪多求快，要循序渐进，稳扎稳打。"

他还告诉儿子："读书不是为了考试，而是为了提高自己的修养和才能。只有真正掌握了知识，才能在人生道路上走得更远。"

在信中，曾国藩还强调了品德修养的重要性。他说："做学问要先做人，只有品德高尚的人，才能成为真正的学者。"

这些家书不仅体现了曾国藩对儿子的关爱，也体现了他对教育的重视。他认为，家庭教育是培养人才的重要途径。

后来，曾纪泽确实成为了一个优秀的人才，这与曾国藩的悉心教育是分不开的。`,
        tags: ['家庭教育', '读书方法', '品德修养']
    },
    {
        id: 12,
        title: '勤俭持家',
        category: 'family',
        time: '约3分钟',
        excerpt: '曾国藩虽然官居高位，但生活非常简朴。他要求家人穿粗布衣服，吃粗茶淡饭，不许铺张浪费...',
        content: `曾国藩虽然官居高位，但生活非常简朴。他要求家人穿粗布衣服，吃粗茶淡饭，不许铺张浪费。他认为，勤俭是持家的根本。

在给家人的信中，他经常强调勤俭的重要性。他说："勤俭持家，是传家之宝。只有勤俭，才能让家庭兴旺发达。"

他要求家人不要追求奢华，要过简朴的生活。即使是招待客人，也要简单朴素，不要铺张浪费。

曾国藩的勤俭不仅体现在生活上，也体现在工作上。他要求下属也要勤俭，不要浪费公家的钱财。

这种勤俭的精神对家庭产生了深远的影响。曾家的后代都继承了这种勤俭的传统，成为了社会的栋梁之才。

曾国藩的勤俭精神也影响了后人。许多人学习他的勤俭精神，过简朴的生活，为社会做出贡献。`,
        tags: ['勤俭', '简朴', '持家']
    },
    {
        id: 13,
        title: '教育女儿',
        category: 'family',
        time: '约3分钟',
        excerpt: '曾国藩对女儿的教育也很重视，他要求女儿学习女红、读书识字，还要懂得礼仪和持家之道...',
        content: `曾国藩不仅重视儿子的教育，对女儿的教育也很重视。他认为，女儿的教育同样重要，关系到家庭的未来。

他要求女儿学习女红，掌握基本的家务技能。同时，也要读书识字，提高自己的文化修养。更重要的是，要懂得礼仪和持家之道。

在给女儿的信中，他写道："女子虽然不能做官，但也要有学问，有修养。只有有学问的女子，才能教育好下一代。"

他还强调，女子要懂得礼仪，要尊敬长辈，爱护晚辈。要懂得持家之道，管理好家庭事务。

曾国藩对女儿的教育体现了他的开明思想。他认为，女子也应该有受教育的机会，也应该有独立的人格。

这种教育理念对当时的社会产生了积极的影响，也为后来的女子教育奠定了基础。`,
        tags: ['女儿教育', '女德', '开明思想']
    },
    {
        id: 14,
        title: '整顿吏治',
        category: 'official',
        time: '约4分钟',
        excerpt: '在担任两江总督时，曾国藩大力整顿吏治，严惩贪官污吏，选拔贤能之士，使官场风气大为改善...',
        content: `在担任两江总督期间，曾国藩大力整顿吏治，严惩贪官污吏，选拔贤能之士，使官场风气大为改善。

他认为，吏治的好坏直接关系到国家的兴衰。只有整顿好吏治，才能让国家长治久安。

在整顿吏治的过程中，曾国藩采取了多种措施。首先，他严惩贪官污吏，对贪污腐败的官员进行严厉处罚。

其次，他选拔贤能之士，任用那些品德高尚、才能出众的人担任重要职务。他认为，只有任用贤能，才能治理好国家。

再次，他建立了严格的考核制度，对官员的政绩进行定期考核，奖优罚劣。

通过这些措施，曾国藩成功地改善了官场风气，提高了政府的效率。他的做法为后来的吏治改革提供了宝贵的经验。

曾国藩的吏治改革不仅在当时产生了积极的影响，也为后来的政治改革提供了借鉴。`,
        tags: ['吏治', '反腐', '政治改革']
    },
    {
        id: 15,
        title: '兴办洋务',
        category: 'official',
        time: '约5分钟',
        excerpt: '曾国藩是洋务运动的重要推动者，他创办了江南制造局，引进西方技术，培养科技人才...',
        content: `曾国藩是洋务运动的重要推动者，他认识到中国要强大，必须学习西方的先进技术。因此，他积极推动洋务运动。

他创办了江南制造局，这是中国最早的现代化工业企业之一。在这里，他引进了西方的先进技术，培养了大批科技人才。

江南制造局不仅生产军火，还生产各种民用产品。它的建立，标志着中国开始走向工业化道路。

在兴办洋务的过程中，曾国藩遇到了很多困难。但他始终坚持不懈，克服了各种困难，最终取得了成功。

他还派遣留学生到西方学习，培养了大批优秀的人才。这些人才后来成为了中国现代化的重要推动者。

曾国藩的洋务运动虽然有其局限性，但它为中国走向现代化奠定了基础，具有重要的历史意义。`,
        tags: ['洋务运动', '现代化', '工业发展']
    },
    {
        id: 16,
        title: '处理外交事务',
        category: 'official',
        time: '约4分钟',
        excerpt: '在处理与外国使节的外交事务时，曾国藩既坚持原则，又灵活应对，赢得了外国使节的尊重...',
        content: `在处理与外国使节的外交事务时，曾国藩表现出了高超的外交智慧。他既坚持原则，又灵活应对，赢得了外国使节的尊重。

他认为，外交事务关系到国家的尊严和利益，必须认真对待。在处理外交事务时，他始终坚持国家利益至上。

同时，他也认识到，外交需要灵活的策略。他善于与外国使节沟通，了解他们的想法，寻找双方都能接受的解决方案。

在处理具体的外交事务时，曾国藩表现出了很强的谈判能力。他能够在不损害国家利益的前提下，与外国达成协议。

他的外交智慧不仅在当时产生了积极的影响，也为后来的外交工作提供了宝贵的经验。

曾国藩的外交实践表明，只有既坚持原则又灵活应对，才能在外交事务中取得成功。`,
        tags: ['外交', '智慧', '谈判']
    },
    {
        id: 17,
        title: '创建湘军',
        category: 'military',
        time: '约5分钟',
        excerpt: '曾国藩创建湘军时，注重选拔将领，严格训练士兵，建立了独特的湘军制度，成为晚清最强大的军队...',
        content: `曾国藩创建湘军是他军事生涯的重要成就。在创建湘军的过程中，他注重选拔将领，严格训练士兵，建立了独特的湘军制度。

他认为，军队的战斗力不仅取决于武器装备，更取决于人的素质。因此，他特别重视将领的选拔和士兵的训练。

在选拔将领时，曾国藩注重品德和才能。他认为，只有品德高尚、才能出众的人，才能成为优秀的将领。

在训练士兵时，曾国藩要求严格。他建立了严格的训练制度，要求士兵不仅要掌握军事技能，还要有良好的品德。

湘军制度的建立，是曾国藩军事思想的重要体现。这种制度不仅提高了军队的战斗力，也为后来的军事改革提供了借鉴。

湘军最终成为了晚清最强大的军队，为平定太平天国做出了重要贡献。`,
        tags: ['湘军', '军事改革', '制度建设']
    },
    {
        id: 18,
        title: '"结硬寨，打呆仗"',
        category: 'military',
        time: '约4分钟',
        excerpt: '曾国藩的军事策略是"结硬寨，打呆仗"，即先稳固防守，再寻找战机，这种策略最终帮助他平定了太平天国...',
        content: `"结硬寨，打呆仗"是曾国藩的重要军事策略。这种策略的核心是先稳固防守，再寻找战机，稳扎稳打，逐步推进。

曾国藩认为，在敌强我弱的情况下，不能急于求成，而要采取稳健的策略。只有先稳固自己的阵地，才能在与敌人的对抗中立于不败之地。

在具体的军事行动中，曾国藩总是先建立坚固的营寨，确保自己的安全。然后，他会在营寨周围布置严密的防守，防止敌人的偷袭。

在防守稳固之后，曾国藩才会寻找战机，对敌人发动攻击。这种策略虽然看起来比较保守，但效果很好。

通过这种策略，曾国藩成功地平定了太平天国。他的军事实践证明，稳健的策略往往比激进的策略更有效。

这种军事思想对后来的军事理论产生了重要影响，成为了中国军事思想的重要组成部分。`,
        tags: ['军事策略', '稳扎稳打', '战术思想']
    },
    {
        id: 19,
        title: '用人不疑',
        category: 'military',
        time: '约3分钟',
        excerpt: '曾国藩用人有一个原则：用人不疑，疑人不用。他信任的将领如李鸿章、左宗棠等，都成为了一代名臣...',
        content: `曾国藩用人有一个重要原则：用人不疑，疑人不用。他认为，只有充分信任下属，才能发挥他们的最大潜力。

在选拔将领时，曾国藩非常慎重。他会仔细考察候选人的品德和才能，只有那些品德高尚、才能出众的人，才会被他任用。

一旦任用，曾国藩就会充分信任他们，给他们充分的权力和自由。他相信，只有充分信任，才能让下属发挥出最大的能力。

他信任的将领如李鸿章、左宗棠等，都成为了一代名臣。这些人的成功，与曾国藩的信任和支持是分不开的。

曾国藩的用人原则不仅体现在军事上，也体现在政治上。他相信，只有用人不疑，才能让人才充分发挥作用。

这种用人思想对后来的管理理论产生了重要影响，成为了中国管理思想的重要组成部分。`,
        tags: ['用人', '信任', '管理思想']
    },
    {
        id: 20,
        title: '攻克天京',
        category: 'military',
        time: '约5分钟',
        excerpt: '1864年，湘军攻克太平天国首都天京，这是曾国藩军事生涯的巅峰。他采取围城打援的策略，最终取得胜利...',
        content: `1864年，湘军攻克太平天国首都天京，这是曾国藩军事生涯的巅峰。这次胜利不仅标志着太平天国运动的结束，也标志着曾国藩军事生涯的最高成就。

在攻打天京的过程中，曾国藩采取了围城打援的策略。他先包围天京，切断太平军的补给线，然后逐步缩小包围圈。

同时，他还派兵阻击太平军的援军，防止他们支援天京。这种策略虽然耗时较长，但效果很好。

在攻打天京的过程中，曾国藩表现出了很强的军事指挥能力。他能够根据战场形势的变化，及时调整策略。

最终，湘军成功地攻克了天京，太平天国运动基本结束。这次胜利不仅为清朝赢得了时间，也为中国的现代化奠定了基础。

攻克天京是曾国藩军事生涯的重要里程碑，也是中国近代史上的重要事件。`,
        tags: ['天京', '胜利', '军事成就']
    }
    // 继续添加更多故事数据...
];

// 当前显示的故事数量
let currentStoryCount = 20;
let currentCategory = 'all';

// DOM元素
const categoryTabs = document.querySelectorAll('.category-tab');
const storiesGrid = document.querySelector('.stories-grid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const storyModal = document.getElementById('storyModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalTime = document.getElementById('modalTime');
const modalContent = document.getElementById('modalContent');
const modalTags = document.getElementById('modalTags');
const modalClose = document.getElementById('modalClose');

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    displayStories();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 分类标签点击事件
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterStories(category);
        });
    });

    // 加载更多按钮点击事件
    loadMoreBtn.addEventListener('click', loadMoreStories);

    // 模态框关闭事件
    modalClose.addEventListener('click', closeModal);
    storyModal.addEventListener('click', function(e) {
        if (e.target === storyModal) {
            closeModal();
        }
    });

    // 故事卡片点击事件（事件委托）
    storiesGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-read-story')) {
            const storyCard = e.target.closest('.story-card');
            const storyId = parseInt(storyCard.querySelector('.story-number').textContent);
            openStoryModal(storyId);
        }
    });
}

// 显示故事
function displayStories() {
    const filteredStories = currentCategory === 'all' 
        ? storiesData.slice(0, currentStoryCount)
        : storiesData.filter(story => story.category === currentCategory).slice(0, currentStoryCount);

    storiesGrid.innerHTML = filteredStories.map(story => createStoryCard(story)).join('');
    
    // 更新加载更多按钮状态
    updateLoadMoreButton();
}

// 创建故事卡片HTML
function createStoryCard(story) {
    return `
        <div class="story-card" data-category="${story.category}">
            <div class="story-number">${story.id.toString().padStart(2, '0')}</div>
            <div class="story-content">
                <h3 class="story-title">${story.title}</h3>
                <div class="story-meta">
                    <span class="story-category">${getCategoryName(story.category)}</span>
                    <span class="story-time">${story.time}</span>
                </div>
                <p class="story-excerpt">${story.excerpt}</p>
                <div class="story-tags">
                    ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="btn-read-story">阅读全文</button>
            </div>
        </div>
    `;
}

// 获取分类名称
function getCategoryName(category) {
    const categoryNames = {
        'childhood': '童年轶事',
        'study': '求学故事',
        'character': '品格修养',
        'family': '家庭生活',
        'official': '为官从政',
        'military': '军事智慧'
    };
    return categoryNames[category] || category;
}

// 筛选故事
function filterStories(category) {
    currentCategory = category;
    currentStoryCount = 20;
    
    // 更新分类标签状态
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });
    
    displayStories();
}

// 加载更多故事
function loadMoreStories() {
    currentStoryCount += 10;
    displayStories();
}

// 更新加载更多按钮状态
function updateLoadMoreButton() {
    const filteredStories = currentCategory === 'all' 
        ? storiesData
        : storiesData.filter(story => story.category === currentCategory);
    
    if (currentStoryCount >= filteredStories.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// 打开故事模态框
function openStoryModal(storyId) {
    const story = storiesData.find(s => s.id === storyId);
    if (!story) return;
    
    modalTitle.textContent = story.title;
    modalCategory.textContent = getCategoryName(story.category);
    modalTime.textContent = story.time;
    modalContent.innerHTML = story.content.replace(/\n/g, '<br><br>');
    modalTags.innerHTML = story.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    storyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    storyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 分享故事功能
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-share')) {
        const title = modalTitle.textContent;
        const url = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            });
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(url).then(() => {
                alert('链接已复制到剪贴板！');
            });
        }
    }
    
    if (e.target.classList.contains('btn-bookmark')) {
        const title = modalTitle.textContent;
        // 这里可以实现收藏功能
        alert(`"${title}" 已添加到收藏夹！`);
    }
});

// 搜索功能（可以后续添加）
function searchStories(keyword) {
    const filteredStories = storiesData.filter(story => 
        story.title.includes(keyword) || 
        story.content.includes(keyword) ||
        story.tags.some(tag => tag.includes(keyword))
    );
    
    // 更新显示
    storiesGrid.innerHTML = filteredStories.map(story => createStoryCard(story)).join('');
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && storyModal.style.display === 'block') {
        closeModal();
    }
});

// 滚动到顶部功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加返回顶部按钮
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
    display: none;
`;

backToTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(backToTopBtn);

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 添加返回顶部按钮的悬停效果
backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
});

backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
}); 