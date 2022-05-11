//photography genre type display when hover

    // various background colors
    let defaultColor = "#ffffff";
    let portraitColor = '#E8CDDA';
    let autoColor = '#AF4546';
    let productColor = '#B1AFAA';
    let fashionColor = '#D2A97C';
    let interiorColor = '#9F8E74';
    
        //grid items
    const portraitGrid = document.getElementsByClassName('portrait');
    const automotiveGrid = document.getElementsByClassName('automotive');
    const productGrid = document.getElementsByClassName('product');
    const fashionGrid = document.getElementsByClassName('fashion');
    const interiorGrid = document.getElementsByClassName('interior');
    
    //genre text
    const portraitType = document.getElementById('portrait');
    const automotiveType = document.getElementById('automotive');
    const productType = document.getElementById('product');
    const fashionType = document.getElementById('fashion');
    const interiorType = document.getElementById('interior');
    
    
    //grid wrapper
    const portfolioWrapper = document.getElementById('portfolio');
    

    // color change for Portait
    portraitGrid[0].addEventListener('mouseenter', ()=>{
        portfolioWrapper.style.backgroundColor = portraitColor;
        portraitType.classList.add('show-genre');
    });
    portraitGrid[0].addEventListener('mouseleave', ()=>{
        portfolioWrapper.style.backgroundColor = defaultColor;
        portraitType.classList.remove('show-genre');
    });

    // color change for Auto
    automotiveGrid[0].addEventListener('mouseenter', ()=>{
        portfolioWrapper.style.backgroundColor = autoColor;
        automotiveType.classList.add('show-genre');
    });
    automotiveGrid[0].addEventListener('mouseleave', ()=>{
        portfolioWrapper.style.backgroundColor = defaultColor;
        automotiveType.classList.remove('show-genre');
    });

    //color change for Product
    productGrid[0].addEventListener('mouseenter', ()=>{
        portfolioWrapper.style.backgroundColor = productColor;
        productType.classList.add('show-genre');
    });
    productGrid[0].addEventListener('mouseleave', ()=>{
        portfolioWrapper.style.backgroundColor = defaultColor;
        productType.classList.remove('show-genre');
    });
    //color change for Fashion
    fashionGrid[0].addEventListener('mouseenter', ()=>{
        portfolioWrapper.style.backgroundColor = fashionColor;
        fashionType.classList.add('show-genre');
    });
   fashionGrid[0].addEventListener('mouseleave', ()=>{
        portfolioWrapper.style.backgroundColor = defaultColor;
        fashionType.classList.remove('show-genre');
    });
    
    //color change for Interior
    interiorGrid[0].addEventListener('mouseenter', ()=>{
        portfolioWrapper.style.backgroundColor = interiorColor;
        interiorType.classList.add('show-genre');
    });
    interiorGrid[0].addEventListener('mouseleave', ()=>{
        portfolioWrapper.style.backgroundColor = defaultColor;
        interiorType.classList.remove('show-genre');
    });
    

    
    