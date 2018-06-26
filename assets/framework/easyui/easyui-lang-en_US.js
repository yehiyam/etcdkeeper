if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'First';
	$.fn.pagination.defaults.afterPageText = 'of {pages} pages';
	$.fn.pagination.defaults.displayMsg = 'page {from} to {to},total {total} records';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Loading...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'OK';
	$.messager.defaults.cancel = 'Cancel';
}
$.map(['validatebox','textbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = 'Mandatory field';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message = 'Please enter a valid email address';
	$.fn.validatebox.defaults.rules.url.message = 'Please enter a valid URL';
	$.fn.validatebox.defaults.rules.length.message = 'Input must be between {0} and {1}';
	$.fn.validatebox.defaults.rules.remote.message = 'Please correct this field';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['day','1','2','3','4','5','6'];
	$.fn.calendar.defaults.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Now';
	$.fn.datebox.defaults.closeText = 'close';
	$.fn.datebox.defaults.okText = 'ok';
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
	};
	$.fn.datebox.defaults.parser = function(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
if ($.fn.datetimespinner){
	$.fn.datetimespinner.defaults.selections = [[0,4],[5,7],[8,10],[11,13],[14,16],[17,19]]
}
