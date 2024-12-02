document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');
    
    const videoData = [
        {
            img: 'images/8fefc41b72602aed6abd053410c2587672c0daa4.png',
            title: '【动画】你想要的治愈系日常'
        },
        {
            img: 'images/9af8c3b02e19c23f215ccdd88e61122b6d870ca0.jpg',
            title: '探秘！神秘的海底世界'
        },
        {
            img: 'images/9c89227101b454786c519c675fe836afe4e63e4d.jpg',
            title: '【美食】舌尖上的中国美食'
        },
        {
            img: 'images/9dcdf61bed6108d2b71255f0dfc778acefeafe88.jpg',
            title: '二次元场景绘画教程'
        },
        {
            img: 'images/14dfcfd48f9e0e01e1dde182bb1ac53a5d116d0d.jpg',
            title: '【游戏】最新RPG游戏实况'
        },
        {
            img: 'images/021e7830e96dd2f3da4b04708c9c901dc438af26.jpg',
            title: '探索科技：未来城市展望'
        },
        {
            img: 'images/31b321a65076f54efc76260836e7a856372d404c.jpg',
            title: '【漫】周更新番导视'
        },
        {
            img: 'images/36ad9c4dc3e195e8c7d9e021925b6c959f661831.jpg',
            title: '自然纪录片：野生动物的日常'
        },
        {
            img: 'images/39a7afc91b6c4c243a1f166890226a883ef87024.jpg',
            title: '【音乐】经典动漫歌曲翻唱'
        },
        {
            img: 'images/40ccf5259e21762fdf625270f4c0ab5eda6c7dff.jpg',
            title: '城市夜景延时摄影'
        },
        {
            img: 'images/47a3a822fb4f3c6f1b52d9cd1a2b82324792771e.jpg',
            title: '【游戏】开放世界探索指南'
        },
        {
            img: 'images/58e7a70a7a9a49ac5d84f68abac90d9187fcc02e.jpg',
            title: '【科技】最新数码产品测评'
        },
        {
            img: 'images/70f7cf127af3f2d94bb8c3fc90a70929cb073282.jpg',
            title: '【动画】经典场景重现'
        },
        {
            img: 'images/77c36e295c7f4bd7920a7e4764a53b2ef9b56e75.jpg',
            title: '【美食】甜点制作教程'
        },
        {
            img: 'images/77fd14e3c9429680a0948e9e96cfca7fe5e77987.png',
            title: '【游戏】策略游戏攻略'
        },
        {
            img: 'images/81b0ddeffc77d5fa8a6e9d537e67b6406694180d.jpg',
            title: '【旅行】城市漫步指南'
        },
        {
            img: 'images/81fbf42553ca444980c5f8469b247b00.jpeg',
            title: '【生活】日常Vlog记录'
        },
        {
            img: 'images/94b564f9b748e1e24c45078b9fd5384f89ddd1a1.jpg',
            title: '【动漫】新番预告解析'
        },
        {
            img: 'images/382d98c48ee201b57abb9c4107d4b4e21aa6c657.jpg',
            title: '【科普】自然奥秘探索'
        },
        {
            img: 'images/516fa66f3c86a58de678e698c827ee4500375f41.jpg',
            title: '【游戏】角色扮演游戏推荐'
        },
        {
            img: 'images/0688d09ba6c2e34d14eb26ab81702ffb0a0b58b2.png',
            title: '【动画】治愈系作品赏析'
        },
        {
            img: 'images/800c982e4bd8126cb995cc278e5d58e8c00c960a.jpg',
            title: '【美食】街边小吃探店'
        },
        {
            img: 'images/896db28f12b23f8391f37cbfa1952aeeeb46755d.jpg',
            title: '【音乐】钢琴演奏合集'
        },
        {
            img: 'images/901b0af20cad8ffb6af23dc3a3cf2741b7dc3cee.png',
            title: '【游戏】独立游戏推荐'
        },
        {
            img: 'images/1333dfc437e1d4bf527c09ca6fe0b011952f90f1.jpg',
            title: '【科技】智能家居体验'
        },
        {
            img: 'images/5865b97591f5c9ca1cf756bf24b3ad096e1654eb.jpg',
            title: '【生活】都市慢生活指南'
        },
        {
            img: 'images/6593dbf22128739be47b36057448bd36e0357987.jpg',
            title: '【动画】经典动画回顾'
        },
        {
            img: 'images/55061a96189225043b35d5f0cc9283f0371ddb1e.jpg',
            title: '【游戏】沙盒游戏玩法攻略'
        },
        {
            img: 'images/57624a5ed2c6b6654cae9f68d95a3ff6974e6ca1.jpg',
            title: '【美食】家常菜制作教程'
        },
        {
            img: 'images/082700c4685570677e4d6aea37475c67a344a20f.jpg',
            title: '【科技】VR设备深度测评'
        },
        {
            img: 'images/84151cf32d45638179208ede44cc207d40bc6d93.jpg',
            title: '【旅行】日本文化探访'
        },
        {
            img: 'images/90236ccd8a0e20f79a6882e7ffe7fcbe7f0fa093.png',
            title: '【动漫】新番角色解析'
        },
        {
            img: 'images/96053b187c5b5a013ebb9eb86840e90355ebd0c1.jpg',
            title: '【音乐】古风音乐欣赏'
        },
        {
            img: 'images/00603195e0868dedab8752c68845e6c7798bd4ec.jpg',
            title: '【游戏】竞技游戏技巧分享'
        },
        {
            img: 'images/5312774b8d8695196fedb0c5086212de.jpg',
            title: '【生活】居家装饰指南'
        },
        {
            img: 'images/037027697f5c5c83cf2d6c0b4d2f887241300978.jpg',
            title: '【美食】世界美食之旅'
        },
        {
            img: 'images/88232737a7e84824ab7fc133906c3a58.jpeg',
            title: '【科普】宇宙探秘系列'
        },
        {
            img: 'images/189713648c266e6df1dbeb882577c1e2.jpg',
            title: '【动画】动画制作幕后'
        },
        {
            img: 'images/a5dca28c3895697d41849ad1702a6073.jpg',
            title: '【游戏】游戏剧情解说'
        },
        {
            img: 'images/a8d247743574a47d822ec17140cca17f09d625d8.jpg',
            title: '【科技】AI技术前沿'
        },
        {
            img: 'images/ada9e84cdf308ee544e89c4a234e3193f5bea632.jpg',
            title: '【旅行】欧洲建筑巡礼'
        },
        {
            img: 'images/af0a84547d45de07bd31288b534c370311931a4d.png',
            title: '【动漫】经典名场面'
        },
        {
            img: 'images/b390fdcd5e649ec5ca949a52b3c9aa7e13b0e1fc.jpg',
            title: '【美食】烘焙教程合集'
        },
        {
            img: 'images/babc9f4ce5e3889e9255490d9fa07266b758e618.jpg',
            title: '【生活】手工DIY教程'
        },
        {
            img: 'images/bc1011a30fb3a21bbf97631a5a4a5f72836422cb.jpg',
            title: '【游戏】主机游戏评测'
        },
        {
            img: 'images/c1c57d02b73642e691a71f4b8a7e1859.jpeg',
            title: '【科普】动物世界探秘'
        },
        {
            img: 'images/c088c4e44a6afd89d69ec890d9bd217f7f1ba913.jpg',
            title: '【动画】动画电影赏析'
        },
        {
            img: 'images/c48862be71a34178a2aedb6f0241bf9f.jpeg',
            title: '【音乐】音乐创作教程'
        },
        {
            img: 'images/ca3edd4f2182350d1f015450d8f4283bf6350210.jpg',
            title: '【科技】编程入门指南'
        },
        {
            img: 'images/cbfba97d5a7411cd0db2d22aeceb58f351d36e95.jpg',
            title: '【旅行】美食旅行记录'
        },
        {
            img: 'images/d22b3623632b206b846b7ebc1f435e605849055f.jpg',
            title: '【游戏】开放世界探索指南'
        },
        {
            img: 'images/d53aef991de6d332c6cde048132eeb78e23e372a.jpg',
            title: '【动画】经典动画回顾'
        },
        {
            img: 'images/da1df523ef274e40e1338abcc1a5e63200491770.jpg',
            title: '【美食】米其林餐厅探访'
        },
        {
            img: 'images/deb4d10a98547856c78f843e0e840b45f69843f2.jpg',
            title: '【科技】未来科技展望'
        },
        {
            img: 'images/e9c6afc09a45f3c0f2a6c7ef9c42421424cef167.jpg',
            title: '【生活】极简生活方式'
        },
        {
            img: 'images/e49da0cc1acdce30e65130c58629e9a7afca6b57.jpg',
            title: '【旅行】世界遗产巡礼'
        },
        {
            img: 'images/e51cb7b5c9da7b8cf5615794a6ba730e3d23f8e3.jpg',
            title: '【动漫】动漫音乐盛典'
        },
        {
            img: 'images/e69f46e9dc56072b0d7eb8295c7fb54c2c228094.jpg',
            title: '【游戏】电竞赛事解说'
        },
        {
            img: 'images/0b0160f4c950a467e27bd62e2733907021c86340.png',
            title: '【科普】深海生物探秘'
        },
        {
            img: 'images/1a04f159d3960f3f911c6676a21e54e67fb6c8c7.jpg',
            title: '【美食】传统小吃制作'
        },
        {
            img: 'images/1a1761e708e1575e9be7d11e665576c6c06d1573.jpg',
            title: '【动画】动画制作教程'
        },
        {
            img: 'images/1cada124698299527665594d870141946b95b6cf.jpg',
            title: '【科技】机器人技术前沿'
        },
        {
            img: 'images/1cdc610340a1b4c19d4cf0ad62db2dab11d555eb.jpg',
            title: '【生活】城市摄影指南'
        },
        {
            img: 'images/1d25b88fbef723eb98be70becc8db97bd1912a13.png',
            title: '【游戏】游戏设计解析'
        },
        {
            img: 'images/2a9c89824910597c7a41c8eabab718d32876e164.png',
            title: '【动漫】动漫配音幕后'
        },
        {
            img: 'images/2c25c6d4e96b3731027d411454bbe1f2f3565619.jpg',
            title: '【旅行】乡村旅行记录'
        },
        {
            img: 'images/3b6134df9597255f270bad615f95c912cb4457b1.jpg',
            title: '【美食】异国料理教学'
        },
        {
            img: 'images/3e9fb19de018fcb1c538fbd54ee632b2a7a6122d.jpg',
            title: '【科普】天文观测指南'
        },
        {
            img: 'images/05a4b0b2093c45aecd58848c359598812a004689.png',
            title: '【动画】动画电影预告'
        },
        {
            img: 'images/5a5c65ffe164fdc745e048e14447c385e44a8dfd.jpg',
            title: '【游戏】游戏音乐欣赏'
        },
        {
            img: 'images/5b8c7687ea06a650eb37406c5eeda7c82b5fb2c6.jpg',
            title: '【科技】数码产品开箱'
        },
        {
            img: 'images/7b3092e29f3960219aef66099ccb2312ccdd591a.jpg',
            title: '【生活】园艺种植教程'
        },
        {
            img: 'images/7bb84bcbbae848218c228b106a4129d2.jpeg',
            title: '【动漫】漫画改编解析'
        },
        {
            img: 'images/8a1997ec9e9eb105da59785608f9df16daa39a3f.jpg',
            title: '【旅行】美食文化之旅'
        }
    ];

    // 生成视频卡片
    videoData.forEach((video, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.img}" alt="视频封面">
                <span class="video-duration">${Math.floor(Math.random() * 10 + 1)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}</span>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <div class="video-stats">
                    <span>${Math.floor(Math.random() * 100 + 1)}万播放</span>
                    <span>${Math.floor(Math.random() * 10000)}弹幕</span>
                </div>
            </div>
        `;
        videoGrid.appendChild(card);
    });
});
