declare module fc.framework {

    class Audio {

        public static playMusic(music: string);

        public static stopMusic();      

        public static playSound(soundId: string, isLoop: boolean);
        
        public static stopSound(soundId: string);

        public static stopAll();

        public static stopAllSound();
    }

    class Device {

        public static readonly statusBarHeight: number;

        public static readonly screenWidth: number;

        public static readonly screenHeight: number;

        public static playSound(res: string, loop: boolean, compHandler: Laya.Handler);

        public static stopSound(res: string);

        public static playMusic(res: string);

        public static stopMusic()

        public static stopAll();

        public static stopAllSound()

        public static vibrateShort();

        public static vibrateLong();

        public static isNetValid(): boolean;
    }

    class Channel{
        
        public static login(successHandler: Laya.Handler, failedHandler: Laya.Handler);

        public static loadSubpackage(pkgName: string, progressHandler: Laya.Handler, successHandler: Laya.Handler, failedHandler: Laya.Handler);

        public static initVideoAd(adUnitId: string);

        public static playVideo(completedHandler: Laya.Handler, interuptHandler: Laya.Handler, errorHandler: Laya.Handler);

        public static isVideoEnable(): boolean;

        public static openShare(text: string, imgUrl: string);

        public static initInsertAd(adUnitId: string, errorHandler);

        public static loadInsertAd(loadedHandler: Laya.Handler, errorHandler: Laya.Handler);

        public static showInsertAd(closeHandler: Laya.Handler);
    }
    
    class Resource {

        public static readonly curScene3dUrl: string;

        public static get3dResUrl(filename: string): string;

        public static get3dPrefabUrl(filename: string): string;

        public static get3dSceneUrl(filename: string): string;

        public static loadSubpackage(subpkg: string, onCompleted: Laya.Handler, onProgress: Laya.Handler);

        public static loadFont(fontUrl: string, onCompleted: Laya.Handler, onProgress: Laya.Handler);

        public static loadRes(resPath: string): any;

        public static loadResAsyn(resPath: string, onCompleted: Laya.Handler, onProgress: Laya.Handler, pkgName: string);

        public static load3dRes(resPath: string): any;

        public static load3dResAsyn(resPath: string, onCompleted: Laya.Handler, onProgress: Laya.Handler, pkgName: string);

        public static loadSprite3d(resPath: string): Laya.Sprite3D;

        public static loadSprite3dAsyn(resPath: string, onCompleted: Laya.Handler, onProgress: Laya.Handler, pkgName: string);

        public static loadScene3d(resPath: string): Laya.Scene3D;

        public static loadScene3dAsyn(resPath: string, onCompleted: Laya.Handler, onProgress: Laya.Handler, pkgName: string);

        public static unloadSceneRes(sceneUrl: string);

        public static printSceneDependences(sceneUrl: string);
    }

    class Md5Utils {        

        public static hex_md5(s);

        public static b64_md5(s);

        public static str_md5(s);

        public static hex_hmac_md5(key, data);

        public static b64_hmac_md5(key, data);
        
        public static str_hmac_md5(key, data);
    }

    
    class MiscUtils {

        public static compareVersion(left: string, right: string);
        
        public static isToday(val: number);
        
        public static isNumber(val: number | string);
        
        public static array2UrlStrArgs(args:any[]);
        
        public static object2UrlStrArgs(args:any);

        public static random(min, max);
    }

    class WebRequest {

        static getArgsSign(agrs: any, secret: string): string;

        static xhrPost(api: string, args: any);

        static xhrPostWithSign(api: string, args: any, secret: string);

        static xhrPostWithSignAndHeader(api: string, args: any, secret: string, headerInfo: any);
    }

    interface GameFrameHook {

        on2Home(callback: Laya.Handler);

        on2Game(callback: Laya.Handler);

        onRelive(callback: Laya.Handler);

        onGameOver(callback: Laya.Handler);
    }

    interface FrameConfig {
        version: string;
        appId: string;
        subpackage: string[];
        netBaseCfgUrl: string;
        netAdCfgUrl: string;
        configList: string[];
        fontList: string[];
        baseResList: string[];
        bgm: string;
        soundClick: string;
        soundViewOpen: string;
        default3DScene: string;
    }

    class GameFrame {

        public static appConfig: FrameConfig;
        public static playerInfo: any;
        public static storeCfg: any;
        public static baseCfg: any;
        public static adCfg: any;
        public static viewCfg: any;
        public static reliveChance: number;
        public static autoStartNext: boolean;
        public static isWin: boolean;
        public static hook: GameFrameHook;
        public static scene3d: Laya.Scene3D;
        
        public static readonly gameState: fc.define.GameState;

        public static startUp();

        public static openView(viewId: string, data: any, callback: Laya.Handler);

        public static closeView(viewId: string);

        public static showLoading(data: any, callback: Laya.Handler);

        public static go2Home(data: any, callback: Laya.Handler);

        public static go2Game(data: any, callback: Laya.Handler);

        public static showSuccessed(data: any, callback: Laya.Handler);

        public static showFailed(data: any, callback: Laya.Handler);

        public static overGame();

        public static startGame();

        public static go2Relive();
    }
}