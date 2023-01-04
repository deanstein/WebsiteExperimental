// typical header - includes logo, optional subtitle, and optional navigation
export default class Header {
    constructor(headerTitle, headerSubtitle) {

        // initialize the arguments
        this.headerTitle = headerTitle;
        this.headerSubtitle = headerSubtitle;
        
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the header
        let headerContainer = document.createElement('div');
        headerContainer.id = 'pluginHeaderContainer';
        headerContainer.className = this.moduleClassName;

        // create the header elements
        let titleDiv = document.createElement('h1');
        titleDiv.innerHTML = this.headerTitle;
        headerContainer.appendChild(titleDiv);

        let subtitleDiv = document.createElement('p');
        subtitleDiv.innerHTML =  this.headerSubtitle;
        headerContainer.appendChild(subtitleDiv);

        return headerContainer;
    }
}