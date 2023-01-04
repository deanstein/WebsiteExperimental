// typical header - includes logo, optional subtitle, and optional navigation
export default class Header {
    constructor(headerTitle, headerSubtitle) {

        this.headerTitle = headerTitle;
        this.headerSubtitle = headerSubtitle;
        
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the header
        let headerContainer = document.createElement('div');
        headerContainer.id = 'pluginHeaderContainer';
        headerContainer.className = 'header-container';

        return headerContainer;
    }
}