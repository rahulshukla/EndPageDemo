export interface EndPageEvent {
    eid: string;
    ets: Number;
    ver: string;
    mid: string;
    actor: ActorData | any;
    context: ContextData | any;
    object: EndObject | any;
    tags: Array<string>;
    edata: EndData | any;
}

export interface ActorData{
    id: string;
    type: string;
}
export interface ContextData{
    channel: string;
    pdata: EndPData | any;
    env: string;
    sid: string;
    did: string;
    cdata: Array<object>;
}

export interface EndPData {
    id: string;
    ver: string;
    pid: string;
}

export interface EndObject{
    id: string;
    type: string;
    ver: string;
    rollup: object;
}

export interface EndData{
    type: string;
    mode: string;
    pageid: string;
    summary: Array<object>;
    duration: number;
}