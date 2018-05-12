// Frontend Scripting for Burger Joint

let FLAP = {
    init: function(){
        $('#continue').on('click', function(event){
            event.preventDefault();
            // FLAP.method()
        });
        
        $(".form-control").on('focus blur', function(){
            console.log(this);
            FLAP.toggleHelp(this);
            FLAP.toggleLabel(this);
        });
         
        $('#yesBusinessName').on('change', function(){
            FLAP.toggleDisplayRelative(this);
            
        });

        $("#activationCode").inputmask({"mask": "9999 9999 9999 9999", "placeholder": " "});
        $("#businessZip").inputmask({"mask": "99999", "placeholder": " "});
        $("#taxId").inputmask({"mask": "999 99 9999", "placeholder": " "});
        $("#ownrSocial").inputmask({"mask": "999 99 9999", "placeholder": " "});
    },
    toggleHelp: function(el){
        $this = $(el);
        this_id = $this.attr('id');
        $(`#${this_id}Help`).toggleClass('show-help');
    },
    printMssg: function(mssg, mssg_type){
        $('.mssgOutput').text(mssg).addClass('active ' + mssg_type);
        setTimeout(function(){ 
            $('.mssgOutput').removeClass('active');
        }, 3000);
    },
    toggleLabel: function(el){
        $this = $(el);
        this_id = $this.attr('id');
        console.log(`[for=${this_id}]`);
        $(`[for=${this_id}]`).toggleClass('text-blue');
    },
    toggleDisplayRelative: function(el){
        $this = $(el);
        var this_relative_to_display = $this.attr('data-showwhat');
        $(`#${this_relative_to_display}`).toggleClass('no-show');
    }
}

FLAP.init();
