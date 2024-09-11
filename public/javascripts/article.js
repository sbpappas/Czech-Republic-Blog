console.log("article")
const currentPath = window.location.pathname;

    // Get all the anchor tags in the nav bar
    const navLinks = document.querySelectorAll('nav.tabs a');

    // Loop through each link and set the 'active' class if the href matches the current URL
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

const articleData = {
    title: "Article 1",
    paragraphs: [
        "YYYEEEEEE detailed description here.",
        "More text content related to the article goes here..."
    ],
    images: [
        { src: "/assets/images/training2.jpeg", alt: "photo 1 description" },
        { src: "/assets/images/training3.jpeg", alt: "photo 2 description" },
        { src: "/assets/images/training4.jpeg", alt: "photo 3 description" }
    ]
};

function ArticlePage() {
    return React.createElement(
        'div', { className: 'article-page' },
        React.createElement('div', { className: 'article-header' }, 
            React.createElement('h1', null, articleData.title)
        ),
        React.createElement('div', { className: 'article-content' },
            articleData.paragraphs.map((text, index) => 
                React.createElement('p', { key: index }, text)
            ),
            React.createElement('div', { className: 'photo-gallery' },
                articleData.images.map((img, index) => 
                    React.createElement('img', { key: index, src: img.src, alt: img.alt })
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(ArticlePage, null), document.getElementById('root'));
