const _mdox_ = {

	_DEBUG: true,
	_DEBUG_LOG: '\n--------------------------------------------------\n',

	_log: function log() {
		if (console && console.log) console.log.apply(console, arguments);
		if (process && process.stdout) process.stdout.write.apply(process.stdout, arguments);
	},

	log: function log() {
		if (this._DEBUG) this._log(this._DEBUG_LOG);
		this._log.apply(this, arguments);
		if (this._DEBUG) this._log(this._DEBUG_LOG);
	},

	yeahString: function yeahString(s) {
		return s + ' yeah!!!';
	}

};

_mdox_.log('-----===== _mdox_ loaded =====------');

export default _mdox_;
