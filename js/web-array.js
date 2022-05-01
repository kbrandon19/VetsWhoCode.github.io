// array for web portfolio - using array map method to interate through the array data



const data = [{
    id:1,
    title:'Social Media Dashboard',
    mainImage:'../assets/smd/social-media-dashboard.jpgsocial-media-dashboard.jpg',
    descriptionOne:' The Social Media Dashboard was a cool project to tackle. Being able to learn about dark mode and how to incorporate a second color scheme was really nice. Not only was I able to learn the technically aspects of the toggle button but about color theory and how important choosing the right colors are. ',
    descriptionTwo:'Being able to incorporate a theme toggle is an important and real work skill, given that this type of feature has become adapted to a lot of other websites and mobile applications.',
    goal:'The goal of this project was to recreate a static dashboard that display statistics from various social media accounts. There are three items that were the focus of this project.',
    goalList:["View the optimal layout for the site depending on their device's screen size",'See hover states for all interactive elements on the page','Toggle color theme to their preference'],
    tools:['SCSS', 'JavaScript', 'CSS Customer','Mobile first workflow','HTML'],
    code:'https://github.com/kbrandon19/Social-Media-Dashboard',
    site:'https://kbrandon19.github.io/Social-Media-Dashboard/',
    subImage1:'../assets/api-advice.jpg',
    subImage2:'../assets/testimonial-grid.png',
    subImage3:'../assets/texture-background.jpeg'
   
    },
    {
        id:2,
        title:'Testimonial Grid',
        mainImage:'',
        descriptionOne:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos sapiente molestiae. Ea, nemo ipsam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam provident eius placeat.',
        descriptionTwo:'',
        goal:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aperiam laboriosam distinctio voluptatibus odit. Commodi omnis autem iusto sint odio?',
        goalList:['View the optimal layout for the site depending on their device\'s screen size'],
        tools:['Tailwind CSS','Mobile first workflow','HTML'],
        code:'https://github.com/kbrandon19/Testimonial-Grid',
        site:'https://kbrandon19.github.io/Testimonial-Grid/',
        subImage1:'',
        subImage2:'',
        subImage3:'',
    },
    {
        id:3,
        title:'Advice API Generator',
        mainImage:'',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos sapiente molestiae. Ea, nemo ipsam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam provident eius placeat.',
        goal:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aperiam laboriosam distinctio voluptatibus odit. Commodi omnis autem iusto sint odio?',
        tools:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aperiam laboriosam distinctio voluptatibus.',
        subImage1:'',
        subImage2:'',
        subImage3:'',
    }]

    function projectData(data){

        let title = data[0].title;
        let id = data[0].id;
        let description = data[0].descriptionOne + data[0].descriptionTwo;
        let goal = data[0].goal;
        let tools = data[0].tools[0];
        let code = data[0].code;
        let site = data[0].site;

        return `<section class="web-project">
        <div class="web-project__title">
          <div class="hori-rule"></div>
          <h1>${title}</h1>
          <a href="#" id="next-project"><span id="text">next project</span> > </a>
        </div>
  
        <div class="web-project__grid">
          <div class="web-project__grid__main-image"></div>
          <div class="web-project__grid__content-info">
            <p>
            ${description}
            </p>
          </div>
          <div class="web-project__grid__about">
            <div id="goal">
              <h2>The Goal</h2>
              <p>${goal}</p>
              <ul>
                <li>View the optimal layout for the site depending on their device's screen size</li>
                <li>See hover states for all interactive elements on the page</li>
                <li>Toggle color theme to their preference</li>
              </ul>
            </div>
            <div id="built">
              <h2>Built With</h2>
              <ul>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>CSS custom properties</li>
                <li>Mobile first workflow</li>
                <li>HTML</li>
              </ul>
            </div>
  
            <div class="project-links">
              <a href="${code}" id="code">View Code</a>
              <a href="${site}" id="site">Live Site</a>
            </div>
          </div>
          <div class="web-project__grid__grid-img">
            <div class="inner-grid">
              <div id="img1"></div>
              <div id="img2"></div>
              <div id="img3"></div>
            </div>
          </div>
        </div>
        
      </section>`
    }
   
    projectData;

