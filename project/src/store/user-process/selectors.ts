import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../const';
import {UserInfo} from '../../types/user-info';

export const getUser = (state: State): UserInfo => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
