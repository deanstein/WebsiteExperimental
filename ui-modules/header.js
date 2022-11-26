// typical header - can be used at the top of a whole plugin, or at the top of a subsection
export default class header {
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