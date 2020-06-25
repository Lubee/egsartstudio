declare module fc.plugin {
    
    class ObjectPool {

        static printPoolInfo();

        static recoverSprite3d(sprite3d: Laya.Sprite3D);

        static getSprite3d(original: Laya.Sprite3D, sign: string): Laya.Sprite3D;

        static getEmptySprite3d(sign: string): Laya.Sprite3D;
    }

    class BaseView extends Laya.Script {
    }

    interface Effect3dInfo {
        customId: string;
        sign: string;
        duaration: number;
        parent: Laya.Sprite3D
        isWorldSpace: boolean;
        position: Laya.Vector3;
        rotation: Laya.Quaternion;
        script: any;
    }

    class Effect3d extends Laya.Script3D {

        static createEffect(effectInfo: Effect3dInfo);
    }

    interface Trigger3dListenerInterface  {
        
        on3dTriggerEnter(other);

        on3dTriggerExit(other);

        on3dTriggerStay(other);
    }
    
    class Trigger3dListener extends Laya.Script3D {

        static Init(sprite3d: Laya.Sprite3D, listener: Trigger3dListenerInterface);
    }

    interface AnimEventListenerInterface {

        onAnimEvt(...args);
    }

    class AnimEventListener extends Laya.Script3D {

        static init(animator: Laya.Animator, listener: AnimEventListenerInterface);
    }

    interface AnimStateListenerInterface {

        onAnimStateEnter(stateName: string, animator: Laya.Animator);

        onAnimStateUpdate(stateName: string, animator: Laya.Animator);

        onAnimStateExit(stateName: string, animator: Laya.Animator);
    }
    
    class AnimStateListener extends Laya.AnimatorStateScript {

        static init(animator: Laya.Animator, stateName: string, listener: AnimStateListenerInterface);

        static remove(animator: Laya.Animator, stateName: string);
    }
}