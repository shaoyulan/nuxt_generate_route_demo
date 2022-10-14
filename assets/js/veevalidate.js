import { extend } from 'vee-validate';
import { required, email, max } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW.json';

localize('zh_TW', zh_TW);

extend("required", required);
extend("email", email);
extend("max", max);

extend('twMobile', value => {
    if (/^[09]{2}[0-9]{8}$/.test(value)) return true;
    return '需為數字及開頭為09、含10個字元';
});