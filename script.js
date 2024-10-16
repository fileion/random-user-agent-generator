class UserAgentGenerator {
    constructor() {
        this.windows_os = ['[Windows; |Windows; U; |]Windows NT 6.:number0-3:;[ Win64; x64| WOW64| x64|]',
            '[Windows; |Windows; U; |]Windows NT 10.:number0-5:;[ Win64; x64| WOW64| x64|]',];
        this.linux_os = ['[Linux; |][U; |]Linux x86_64',
            '[Linux; |][U; |]Linux i:number5-6::number4-8::number0-6: [x86_64|]'];
        this.mac_os = ['Macintosh; [U; |]Intel Mac OS X :number7-9:_:number0-9:_:number0-9:',
            'Macintosh; [U; |]Intel Mac OS X 10_:number0-12:_:number0-9:'];
        this.androidVersions = ['4.3.1',
            '4.4',
            '4.4.1',
            '4.4.4',
            '5.0',
            '5.0.1',
            '5.0.2',
            '5.1',
            '5.1.1',
            '6.0',
            '6.0.1',
            '7.0',
            '7.1',
            '7.1.1'];
        this.androidDevices = {
            '4.3': ['GT-I9:number2-5:00 Build/JDQ39',
                'Nokia 3:number1-3:[10|15] Build/IMM76D',
                '[SAMSUNG |]SM-G3:number1-5:0[R5|I|V|A|T|S] Build/JLS36C',
                'Ascend G3:number0-3:0 Build/JLS36I',
                '[SAMSUNG |]SM-G3:number3-6::number1-8::number0-9:[V|A|T|S|I|R5] Build/JLS36C',
                'HUAWEI G6-L:number10-11: Build/HuaweiG6-L:number10-11:',
                '[SAMSUNG |]SM-[G|N]:number7-9:1:number0-8:[S|A|V|T] Build/[JLS36C|JSS15J]',
                '[SAMSUNG |]SGH-N0:number6-9:5[T|V|A|S] Build/JSS15J',
                'Samsung Galaxy S[4|IV] Mega GT-I:number89-95:00 Build/JDQ39',
                'SAMSUNG SM-T:number24-28:5[s|a|t|v] Build/[JLS36C|JSS15J]',
                'HP :number63-73:5 Notebook PC Build/[JLS36C|JSS15J]',
                'HP Compaq 2:number1-3:10b Build/[JLS36C|JSS15J]',
                'HTC One 801[s|e] Build/[JLS36C|JSS15J]',
                'HTC One max Build/[JLS36C|JSS15J]',
                'HTC Xplorer A:number28-34:0[e|s] Build/GRJ90',],
            '4.4': ['XT10:number5-8:0 Build/SU6-7.3',
                'XT10:number12-52: Build/[KXB20.9|KXC21.5]',
                'Nokia :number30-34:10 Build/IMM76D',
                'E:number:20-23::number0-3::number0-4: Build/24.0.[A|B].1.34',
                '[SAMSUNG |]SM-E500[F|L] Build/KTU84P',
                'LG Optimus G Build/KRT16M',
                'LG-E98:number7-9: Build/KOT49I',
                'Elephone P:number2-6:000 Build/KTU84P',
                'IQ450:number0-4: Quad Build/KOT49H',
                'LG-F:number2-5:00[K|S|L] Build/KOT49[I|H]',
                'LG-V:number3-7::number0-1:0 Build/KOT49I',
                '[SAMSUNG |]SM-J:number1-2::number0-1:0[G|F] Build/KTU84P',
                '[SAMSUNG |]SM-N80:number0-1:0 Build/[KVT49L|JZO54K]',
                '[SAMSUNG |]SM-N900:number5-8: Build/KOT49H',
                '[SAMSUNG-|]SGH-I337[|M] Build/[JSS15J|KOT49H]',
                '[SAMSUNG |]SM-G900[W8|9D|FD|H|V|FG|A|T] Build/KOT49H',
                '[SAMSUNG |]SM-T5:number30-35: Build/[KOT49H|KTU84P]',
                '[Google |]Nexus :number5-7: Build/KOT49H',
                'LG-H2:number0-2:0 Build/KOT49[I|H]',
                'HTC One[_M8|_M9|0P6B|801e|809d|0P8B2|mini 2|S][ dual sim|] Build/[KOT49H|KTU84L]',
                '[SAMSUNG |]GT-I9:number3-5:0:number0-6:[V|I|T|N] Build/KOT49H',
                'Lenovo P7:number7-8::number1-6: Build/[Lenovo|JRO03C]',
                'LG-D95:number1-8: Build/KOT49[I|H]',
                'LG-D:number1-8::number0-8:0 Build/KOT49[I|H]',
                'Nexus5 V:number6-7:.1 Build/KOT49H',
                'Nexus[_|] :number4-10: Build/[KOT49H|KTU84P]',
                'Nexus[_S_| S ][4G |]Build/GRJ22',
                '[HM NOTE|NOTE-III|NOTE2 1LTE[TD|W|T]',
                'ALCATEL ONE[| ]TOUCH 70:number2-4::number0-9:[X|D|E|A] Build/KOT49H',
                'MOTOROLA [MOTOG|MSM8960|RAZR] Build/KVT49L'],
            '5.0': ['Nokia :number10-11:00 [wifi|4G|LTE] Build/GRK39F',
                'HTC 80:number1-2[s|w|e|t] Build/[LRX22G|JSS15J]',
                'Lenovo A7000-a Build/LRX21M;',
                'HTC Butterfly S [901|919][s|d|] Build/LRX22G',
                'HTC [M8|M9|M8 Pro Build/LRX22G',
                'LG-D3:number25-37: Build/LRX22G',
                'LG-D72:number0-9: Build/LRX22G',
                '[SAMSUNG |]SM-G4:number0-9:0 Build/LRX22[G|C]',
                '[|SAMSUNG ]SM-G9[00|25|20][FD|8|F|F-ORANGE|FG|FQ|H|I|L|M|S|T] Build/[LRX21T|KTU84F|KOT49H]',
                '[SAMSUNG |]SM-A:number7-8:00[F|I|T|H|] Build/[LRX22G|LMY47X]',
                '[SAMSUNG-|]SM-N91[0|5][A|V|F|G|FY] Build/LRX22C',
                '[SAMSUNG |]SM-[T|P][350|550|555|355|805|800|710|810|815] Build/LRX22G',
                'LG-D7:number0-2::number0-9: Build/LRX22G',
                '[LG|SM]-[D|G]:number8-9::number0-5::number0-9:[|P|K|T|I|F|T1] Build/[LRX22G|KOT49I|KVT49L|LMY47X]'],
            '5.1': ['Nexus :number5-9: Build/[LMY48B|LRX22C]',
                '[|SAMSUNG ]SM-G9[28|25|20][X|FD|8|F|F-ORANGE|FG|FQ|H|I|L|M|S|T] Build/[LRX22G|LMY47X]',
                '[|SAMSUNG ]SM-G9[35|350][X|FD|8|F|F-ORANGE|FG|FQ|H|I|L|M|S|T] Build/[MMB29M|LMY47X]',
                '[MOTOROLA |][MOTO G|MOTO G XT1068|XT1021|MOTO E XT1021|MOTO XT1580|MOTO X FORCE XT1580|MOTO X PLAY XT1562|MOTO XT1562|MOTO XT1575|MOTO X PURE XT1575|MOTO XT1570 MOTO X STYLE] Build/[LXB22|LMY47Z|LPC23|LPK23|LPD23|LPH223]'],
            '6.0': ['[SAMSUNG |]SM-[G|D][920|925|928|9350][V|F|I|L|M|S|8|I] Build/[MMB29K|MMB29V|MDB08I|MDB08L]',
                'Nexus :number5-7:[P|X|] Build/[MMB29K|MMB29V|MDB08I|MDB08L]',
                'HTC One[_| ][M9|M8|M8 Pro] Build/MRA58K',
                'HTC One[_M8|_M9|0P6B|801e|809d|0P8B2|mini 2|S][ dual sim|] Build/MRA58K'],
            '7.0': ['Pixel [XL|C] Build/[NRD90M|NME91E]',
                'Nexus :number5-9:[X|P|] Build/[NPD90G|NME91E]',
                '[SAMSUNG |]GT-I:number91-98:00 Build/KTU84P',
                'Xperia [V |]Build/NDE63X',
                'LG-H:number90-93:0 Build/NRD90[C|M]'],
            '7.1': ['Pixel [XL|C] Build/[NRD90M|NME91E]',
                'Nexus :number5-9:[X|P|] Build/[NPD90G|NME91E]',
                '[SAMSUNG |]GT-I:number91-98:00 Build/KTU84P',
                'Xperia [V |]Build/NDE63X',
                'LG-H:number90-93:0 Build/NRD90[C|M]']
        };

        this.android_os = ['Linux; Android :androidVersion:; :androidDevice:',
            //TODO: Add a $windowsDevices variable that does the same as androidDevice
            //'Windows Phone 10.0; Android :androidVersion:; :windowsDevice:',
            'Linux; U; Android :androidVersion:; :androidDevice:',
            'Android; Android :androidVersion:; :androidDevice:',];
        this.mobile_ios = {
            'iphone': 'iPhone; CPU iPhone OS :number7-11:_:number0-9:_:number0-9:; like Mac OS X;',
            'ipad': 'iPad; CPU iPad OS :number7-11:_:number0-9:_:number0-9: like Mac OS X;',
            'ipod': 'iPod; CPU iPod OS :number7-11:_:number0-9:_:number0-9:; like Mac OS X;',
        };
    }

    getOS(os = null) {
        let _os = [];
        if (os === null || ['chrome', 'firefox', 'explorer'].includes(os)) {
            _os = os === 'explorer' ? this.windows_os : [...this.windows_os, ...this.linux_os, ...this.mac_os];
        } else {
            _os = this[`${os}_os`] || [];
        }

        // randomly select an operating system
        const selectedIndex = Math.floor(Math.random() * _os.length);
        let selected_os = _os[selectedIndex].replace(/;$/, '');

        // check for spin syntax
        if (selected_os.includes('[')) {
            selected_os = UserAgentGenerator.processSpinSyntax(selected_os);
        }

        // check for random number syntax
        if (selected_os.includes(':number')) {
            selected_os = UserAgentGenerator.processRandomNumbers(selected_os);
        }

        if (Math.random() * 100 > 50) {
            selected_os += '; en-US';
        }
        return selected_os;
    }

    getMobileOS(os = null) {
        os = os ? os.toLowerCase() : null;
        let _os = [];

        switch (os) {
            case 'android':
                _os = [..._os, ...this.android_os];
                break;
            case 'iphone':
            case 'ipad':
            case 'ipod':
                _os.push(this.mobile_ios[os]);
                break;
            default:
                _os = [...this.android_os, ...Object.values(this.mobile_ios)];
                break;
        }

        // Select a random mobile OS
        const selectedIndex = Math.floor(Math.random() * _os.length);
        let selected_os = _os[selectedIndex].replace(/;$/, '');

        if (selected_os.includes(':androidVersion:')) {
            selected_os = this.processAndroidVersion(selected_os);
        }

        if (selected_os.includes(':androidDevice:')) {
            selected_os = this.addAndroidDevice(selected_os);
        }

        if (selected_os.includes(':number')) {
            selected_os = UserAgentGenerator.processRandomNumbers(selected_os);
        }

        return selected_os;
    }

    static processRandomNumbers(selected_os) {
        return selected_os.replace(/:number(\d+)-(\d+):/gi, (match, p1, p2) => {
            const min = parseInt(p1, 10);
            const max = parseInt(p2, 10);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        });
    }

    static processSpinSyntax(selected_os) {
        return selected_os.replace(/\[([\w\-\s|;]*?)\]/gi, (match, p1) => {
            const options = p1.split('|');
            const randomIndex = Math.floor(Math.random() * options.length);
            return options[randomIndex];
        });
    }

    processAndroidVersion(selected_os) {
        this.androidVersion = this.androidVersions[
            Math.floor(Math.random() * this.androidVersions.length)
        ];
        return selected_os.replace(/:androidVersion:/gi, () => this.androidVersion);
    }

    addAndroidDevice(selected_os) {
        const devices = this.androidDevices[this.androidVersion.substring(0, 3)];
        let device = devices[Math.floor(Math.random() * devices.length)];

        // Process spin syntax
        device = UserAgentGenerator.processSpinSyntax(device);

        // Replace the :androidDevice: placeholder with the selected device
        return selected_os.replace(/:androidDevice:/gi, () => device);
    }

    chromeVersion(version) {
        const majorVersion = Math.floor(Math.random() * (version.max - version.min + 1)) + version.min;
        const buildNumber = Math.floor(Math.random() * 3001) + 1000;
        const patchNumber = Math.floor(Math.random() * 301) + 100;
        return `${majorVersion}.0.${buildNumber}.${patchNumber}`;
    }

    firefoxVersion(version) {
        const majorVersion = Math.floor(Math.random() * (version.max - version.min + 1)) + version.min;
        const minorVersion = Math.floor(Math.random() * 10);
        return `${majorVersion}.${minorVersion}`;
    }

    windows(version) {
        const majorVersion = Math.floor(Math.random() * (version.max - version.min + 1)) + version.min;
        const minorVersion = Math.floor(Math.random() * 10);
        return `${majorVersion}.${minorVersion}`;
    }

    generate(userAgent = null) {
        if (userAgent === null) {
            const r = Math.floor(Math.random() * 101);
            if (r >= 44) {
                userAgent = ['firefox', 'chrome', 'explorer'][Math.floor(Math.random() * 3)];
            } else {
                userAgent = ['iphone', 'android', 'mobile'][Math.floor(Math.random() * 3)];
            }
        } else if (['windows', 'mac', 'linux'].includes(userAgent)) {
            const agents = { 'firefox': 1, 'chrome': 1 };
            if (userAgent === 'windows') {
                agents['explorer'] = 1;
            }
            userAgent = ['firefox', 'chrome', 'explorer'][Math.floor(Math.random() * Object.keys(agents).length)];
        }
        sessionStorage.setItem('agent', userAgent);
        let result;
        if (userAgent === 'chrome') {
            result = `Mozilla/5.0 (${this.getOS(userAgent)}) AppleWebKit/${Math.random() > 0.5 ? Math.floor(Math.random() * (537 - 533 + 1)) + 533 : Math.floor(Math.random() * (603 - 600 + 1)) + 600}.${Math.floor(Math.random() * 50) + 1} (KHTML, like Gecko) Chrome/${this.chromeVersion({ min: 47, max: 55 })} Safari/${Math.random() > 0.5 ? Math.floor(Math.random() * (537 - 533 + 1)) + 533 : Math.floor(Math.random() * (603 - 600 + 1)) + 600}`;
        } else if (userAgent === 'firefox') {
            result = `Mozilla/5.0 (${this.getOS(userAgent)}) Gecko/${Math.random() > 0.3 ? '20100101' : '20130401'} Firefox/${this.firefoxVersion({ min: 45, max: 74 })}`;
        } else if (userAgent === 'explorer') {
            const int = Math.floor(Math.random() * (11 - 7 + 1)) + 7;
            result = `Mozilla/5.0 (compatible; MSIE ${int}.0; ${this.getOS('windows')} Trident/${int === 7 || int === 8 ? '4' : (int === 9 ? '5' : (int === 10 ? '6' : '7'))}.0)`;
        } else if (['mobile', 'android', 'iphone', 'ipad', 'ipod'].includes(userAgent)) {
            result = `Mozilla/5.0 (${this.getMobileOS(userAgent)}) AppleWebKit/${Math.random() > 0.5 ? Math.floor(Math.random() * (537 - 533 + 1)) + 533 : Math.floor(Math.random() * (603 - 600 + 1)) + 600}.${Math.floor(Math.random() * 50) + 1} (KHTML, like Gecko) Chrome/${this.chromeVersion({ min: 47, max: 55 })} Mobile Safari/${Math.random() > 0.5 ? Math.floor(Math.random() * (537 - 533 + 1)) + 533 : Math.floor(Math.random() * (603 - 600 + 1)) + 600}.${Math.floor(Math.random() * 10)}`;
        } else {
            throw new Error('Unable to determine user agent to generate');
        }
        return result;
    }

}


const userAgentGenerator = new UserAgentGenerator();

const result = document.getElementById('result');

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    result.innerHTML = '';
    const number = parseInt(document.getElementById('number').value);

    const list = document.createElement('ul');

    list.classList.add('agents');

    let agents = '';
    for (let index = 0; index < number; index++) {
        const generatedString = userAgentGenerator.generate();
        agents += `<li>${generatedString}</li>`;
    }

    list.innerHTML = agents;
    result.appendChild(list);
});

const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(result.innerText);
});

const download = document.getElementById('download');
download.addEventListener('click', () => {
    const blob = new Blob([result.innerText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-agents-fileion.com.txt';
    a.click();
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    result.innerHTML = '';
});