// typical footer
export class footer {
    constructor() {
       
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        let footerContainer = document.createElement('div');
        footerContainer.id = 'pluginFooterContainer';
    
        let footerDiv = document.createElement('div');
        footerDiv.id = 'pluginFooterDiv';
        footerContainer.appendChild(footerDiv);

        let footerIcon = document.createElement('img');
        footerIcon.src = 'https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/img/plugin_manager_grey.png';
        footerIcon.id = 'pluginFooterIcon';
        footerDiv.appendChild(footerIcon);
    
        let footerDescriptionText = document.createTextNode("Powered by FormIt JavaScript plugins");
        footerDiv.appendChild(footerDescriptionText);
    
        let footerDivUL = document.createElement('ul');
        footerDiv.appendChild(footerDivUL);
    
        let footerLearnAboutPluginsLI = document.createElement('li');
        let footerLearnAboutPluginsLink = document.createElement('a');
        let footerLearnAboutPluginsText = document.createTextNode("Learn about plugins");
        footerLearnAboutPluginsLink.appendChild(footerLearnAboutPluginsText);
        footerLearnAboutPluginsLink.setAttribute("href", "javascript:void(0);");
        footerDivUL.appendChild(footerLearnAboutPluginsLI);
        footerLearnAboutPluginsLI.appendChild(footerLearnAboutPluginsLink);
    
        footerLearnAboutPluginsLink.onclick = function() {
            FormItInterface.CallMethod("FormIt.OpenURL", 'https://formit3d.github.io/FormItExamplePlugins/index.html');
        }
    
        let footerLearnToBuildLI = document.createElement('li');
        let footerLearnToBuildLink = document.createElement('a');
        let footerLearnToBuildText = document.createTextNode("Build your own");
        footerLearnToBuildLink.appendChild(footerLearnToBuildText);
        footerLearnToBuildLink.setAttribute("href", "javascript:void(0);");
        footerDivUL.appendChild(footerLearnToBuildLI);
        footerLearnToBuildLI.appendChild(footerLearnToBuildLink);
    
        footerLearnToBuildLink.onclick = function() {
            FormItInterface.CallMethod("FormIt.OpenURL", 'https://formit3d.github.io/FormItExamplePlugins/docs/HowToBuild.html');
        }

        return footerContainer;
    }
}