export const Check = {
	null: (val) => {
		if(val == null) {
			return true;
		} else {
			let reg = /(^\s*)|(\s*$)|(\s)/g;
			val = val.replace(reg, "");
			if(val == '') {
				return true;
			} else {
				return false;
			}
		}
	}
}