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

        $('#noAddrSame').on('change', function(){
            FLAP.toggleDisplayRelative(this);
        });

        $('#yesCc').on('change', function(){
            FLAP.toggleDisplayRelative(this);
        });

        $('.custom-checkbox').on('change', function(){
            FLAP.thereCanBeOnlyOne(this);
        } );

        $("#activationCode").inputmask({"mask": "9999 9999 9999 9999", "placeholder": " "});
        $("#businessZip").inputmask({"mask": "99999", "placeholder": " "});
        $("#businessPhone").inputmask({"mask": "(999) 999-9999", "placeholder": " "});
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
    },
    thereCanBeOnlyOne: function(parent){
        var unchecked = $(parent).find('[type="checkbox"]:not(:checked)');
        var checked = $(parent).find('[type="checkbox"]:checked');
        unchecked.attr('disabled', true);
        if(checked.length === 0){
            $(parent).find('[type="checkbox"]').attr('disabled', false);
        }
    }
}

FLAP.init();
