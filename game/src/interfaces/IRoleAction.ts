export interface IRoleAction{
    action(possibleTargets: BoardLocation[], targetLocation:BoardLocation | undefined):BoardLocation[];
}
