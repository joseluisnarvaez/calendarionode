	function init() {

		scheduler.config.xml_date="%Y-%m-%d %H:%i:s";
		scheduler.config.dblclick_create=false;
		scheduler.config.details_on_dblclick=false;
		scheduler.config.drag_move=false;
		scheduler.config.drag_resize=false;
		scheduler.config.renderEvent=false;
		scheduler.config.edit=false;
		scheduler.config.touch_drag = false
		scheduler.config.quick_info_detached = false;;
		scheduler.init('scheduler_here',new Date(),"month");
		scheduler.load("/eventos", "json")


	}
	
	function show_minical(){
		if (scheduler.isCalendarVisible())
			scheduler.destroyCalendar();
		else
			scheduler.renderCalendar({
				position:"dhx_minical_icon",
				date:scheduler._date,
				navigation:true,
				handler:function(date,calendar){
					scheduler.setCurrentView(date);
					scheduler.destroyCalendar()
				}
			});
	}
