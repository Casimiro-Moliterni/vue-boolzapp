const { createApp } = Vue;
const dt = luxon.DateTime;
createApp({
    data() {
        return {
          activeItem: 0,
          newText:'',
          textSearch:'',
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                ],
              },
              {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                ],
              },
              {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                ],
              },
              {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                ],
              },
            ],
        };
    },
    methods: {
      activeContact(){
       if(this.contacts[index].visible === true){
        this.contacts[index].visible = false ;
       } else {
        this.contacts[index].visible = true ;
       }
       console.log(this.contacts[index].visible)
      },
      enableItem(indexToActivate) {
        this.activeItem = indexToActivate;
    },
    getCurrentDate(){
     return this.date =dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
    },
    myText(){
      const trimstring = this.newText.trim();
       newObject = {
        date:this.getCurrentDate(),
        message: trimstring,
        status: 'sent'
      }  
      if(trimstring.length >= 1){
        this.contacts[this.activeItem].messages.push(newObject); 
      this.newText='';
      }
    },
    userMessageObject(){
      newObject = {
        date:this.getCurrentDate(),
        message:'ok',
        status: 'received'
      }
      this.contacts[this.activeItem].messages.push(newObject); 
    },
  userMessage(){
  setTimeout(()=> {this.userMessageObject(this.activeItem);},1000)
  },
  searchContact(){   
    
    this.contacts.forEach(elements => {
      const element = elements.name;
      if(element.toLowerCase().includes(this.textSearch.toLowerCase())){
       elements.visible = true;
      }else{
       elements.visible = false;  
      }
    });
  },
  
    },
    mounted(){

    }
}).mount('#app');
