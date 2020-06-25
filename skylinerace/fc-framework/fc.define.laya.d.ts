declare module fc.define {
    class Event {
        public static readonly XHR_RESPONSE: string; //"XHR_RESPONSE";
        public static readonly APP_JUMP_CANCEL: string; //"NAVIGATE_FAILED"; //跳转失败
        public static readonly APP_JUMP_SUCCESS: string; //"NAVIGATE_SUCCESS": string; //跳转成功
        public static readonly AD_CONFIIG_LOADED: string; //"AD_CONFIIG_LOADED";
        public static readonly UI_TOAST_MESSAGE: string; //"UI_TOAST_MESSAGE";
        public static readonly UI_PROGRESS_UPDATE: string; //"UI_PROGRESS_UPDATE";
        
        public static readonly UI_VIEW_CLOSED: string; //"UI_VIEW_CLOSED";
        public static readonly UI_VIEW_OPENED: string; //"UI_VIEW_OPENED";
        
        public static readonly AD_VIDEO_PLAY: string; //"EVENT_AD_VIDEO_PLAY";
        public static readonly AD_VIDEO_CLOSED: string; //"EVENT_AD_VIDEO_CLOSED";
        
        public static readonly Device_HIDE: string; //"DEVICE_ON_HIDE";
        public static readonly Device_SHOW: string; //"DEVICE_ON_SHOW";
        public static readonly Device_RESUME: string; //"DEVICE_ON_RESUME";
        
        public static readonly LAUNCH_COMPLETED: string; //"EVENT_LAUNCH_COMPLETED";
        public static readonly DATA_SETTING_UPDATE: string; //"DATA_SETTING_UPDATE";
        public static readonly DATA_LOGIN_INFO_UPDATE: string; //"DATA_LOGIN_INFO_UPDATE";
        public static readonly GAME_SLEEP: string; //"GAME_SLEEP";
        public static readonly GAME_WAKEUP: string; //"GAME_WAKEUP";
        public static readonly GAME_HOME: string; //"GAME_HOME";
        public static readonly GAME_PREPARE: string; //"GAME_PREPARE";
        public static readonly GAME_START: string; //"GAME_START";
        public static readonly GAME_WIN: string; //"GAME_WIN";
        public static readonly GAME_FAILED: string; //"GAME_FAILED";
        public static readonly GAME_RELIVE: string; //"GAME_RELIVE";
        public static readonly GAME_OVER: string; //"GAME_OVER";
        public static readonly GAME_NEXTRES_COM: string; //"GAME_NEXTRES_COM";
        public static readonly EGG_GET_AWARD: string; //"EGG_GET_AWARD";
        public static readonly OPEN_WIN_VIEW: string; //"OPEN_WIN_VIEW"; //打开胜利界面
        public static readonly OPEN_FAILED_VIEW: string; //"OPEN_FAILED_VIEW": string; //打开失败界面
        public static readonly GAME_RESET_START: string; //"GAME_RESET_START": string; //重置游戏回到首页
        
        public static readonly STORECFG_UPDATE: string; //"STORECFG_UPDATE": string; //商城配置更新
        public static readonly STORE_SWITCH_TAB: string; //"STORE_SWITCH_TAB": string; //商城切换tab选项卡
        public static readonly STORE_USE_ITEM: string; //"STORE_USE_ITEM": string; // 使用道具
        public static readonly STORE_ITEM_UNLOCKED: string; //"STORE_ITEM_UNLOCKED" //道具解锁
        
        public static readonly GOLD_UPDATE: string; //"GOLD_UPDATE" //金币更新
    }

    enum GameState {
        STATE_LOADING,
        STATE_UNBEGIN,
        STATE_PREPARE,
        STATE_PLAYING,
        STATE_PAUSE,
    }

    enum ViewEnum {
        Loading,
        Home,
        Game,
        Success,
        Failed,
        MsgBox,
        Store,
        Custom
    }

    enum Layout {
        VERTICAL_TOP,
        VERTICAL_MIDDLE,
        VERTICAL_BOTTOM,
        HORIZONTAL_LEFT,
        HORIZONTAL_CENTER,
        HORIZONTAL_RIGHT
    }
}