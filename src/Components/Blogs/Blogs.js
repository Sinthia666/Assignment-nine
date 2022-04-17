import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='context-api'>
                <h1>What is context API</h1>
                <p>
                    The React Context API is designed for prop drilling.Context Api provides a way to pass data through the component tree from parent to child components, without having to pass props down manually at each level.  Context API is Flexible Since creating a context gives us two components to work with (Provider and Consumer), we’re free to use them however we want.One of the use case is  storing a user profile and accessing it wherever we need to.




                </p>
            </div>

            <div>
                <h1>What is semantic tag</h1>
                <p>
                    Semantic tags are tags that are designed to make computer programs (search engines, information collectors, speech browsers, etc.) understand what type of information is contained in these tags.
                    Semantic HTML is a way of writing HTML code that's readable, that gives meaning to the webpage rather than just the presentation part.ome semantic tags introduced in HTML5 are (<article> </article>- the main content of the page, <footer> </footer>- site footer). Benefits of using semantic tags are increases the readability and accessibility of our code, helps us rank higher in search engine results and easier to maintain in a large codebase.
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blogs;