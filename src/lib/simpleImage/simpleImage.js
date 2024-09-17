import './simple-image.css'

class SimpleImage {
  // private block;

    constructor({data, block}){
        this.data = data,
        this.block = block,
        this.data = {
            url: data.url || '',
            caption: data.caption || '',
            withBorder: data.withBorder !== undefined ? data.withBorder : false,
            withBackground: data.withBackground !== undefined ? data.withBackground : false,
            stretched: data.stretched !== undefined ? data.stretched : false,
          };
        this.wrapper = undefined,
        this.settings = [
            {
              name: 'withBorder',
              icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M8 3h4M8 17h4m-9-5V8m14 4V8M1 1h4v4H1V1Zm14 0h4v4h-4V1ZM1 15h4v4H1v-4Zm14 0h4v4h-4v-4Z"/></svg>`
            },
            {
              name: 'stretched',
              icon: `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M11 1h4m0 0v4m0-4-5 5.243M5 15H1m0 0v-4m0 4 5.243-5"/></svg>`
            },
            {
              name: 'withBackground',
              icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`
            }
          ];
    }

    static get toolbox() {
        return {
          title: 'Image',
          icon: '<svg width="13" height="13" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"><path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/></svg>'
        };
      }
      
    render(){
        this.wrapper = document.createElement('div');
        const input = document.createElement('input');;
        input.value = this.data && this.data.url ? this.data.url : '';


        this.wrapper.classList.add('simple-image');
        this.wrapper.appendChild(input);

        if (this.data && this.data.url){
            this._createImage(this.data.url, this.data.caption);
            return this.wrapper;
          }

        input.placeholder = 'Coller l\'URL de l\'image...';
        input.value = this.data && this.data.url ? this.data.url : '';

        input.addEventListener('paste', (event) => {
            this._createImage(event.clipboardData.getData('text'));
          });

        return this.wrapper;
    }

    _createImage(url, captionText){
        const image = document.createElement('img');
        const caption = document.createElement('input');

        
        image.src = url;
        caption.placeholder = 'Caption...';
        caption.value = captionText || '';
        
        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(image);
        this.wrapper.appendChild(caption);
        
        console.log('url and reader', url, imagePreview);
        this._acceptTuneView();
    }

    save(blockContent){
        const image = blockContent.querySelector('img');
        const caption = blockContent.querySelector('[contenteditable]');

        return Object.assign(this.data, {
            url: image.src,
            caption: caption.value
         })
    }

    validate(savedData){
        if (!savedData.url.trim()){
          return false;
        }
    
        return true;
    }

    renderSettings(){
        const wrapper = document.createElement('div');
    
        this.settings.forEach( tune => {
        let button = document.createElement('div');
    
        button.classList.add('cdx-settings-button');
        button.classList.toggle('cdx-settings-button--active', this.data[tune.name]);
        button.innerHTML = tune.icon;
        wrapper.appendChild(button);

        button.addEventListener('click', () => {
            this._toggleTune(tune.name);
            button.classList.toggle('cdx-settings-button--active');
          });


     });
    
        return wrapper;
    }

    _toggleTune(tune) {
        this.data[tune] = !this.data[tune];
    }

    _acceptTuneView() {
      this.settings.forEach( tune => {
        this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);
    
        if (tune.name === 'stretched') {
          this.block.stretched = !!this.data.stretched;
          // this.block.stretched(this.block.getCurrentBlockIndex(), !!this.data.stretched);
        }
      });
    }

    // static get pasteConfig() {
    //   return {
    //     tags: ['IMG'],
    //     files: {
    //       mimeTypes: ['image/*'],
    //       extensions: ['gif', 'jpg', 'png'] // You can specify extensions instead of mime-types
    //     }
    //   }
    // }

    // onPaste(event){
    //   switch (event.type){
    //     // ... case 'tag'
    //     case 'file':
    //       /* We need to read file here as base64 string */
    //       const file = event.detail.file;
    //       const reader = new FileReader();
  
    //       reader.onload = (loadEvent) => {
    //         this._createImage(loadEvent.target.result);
    //       };
  
    //       reader.readAsDataURL(file);
    //       break;
    //   }
    // }
}

export default SimpleImage