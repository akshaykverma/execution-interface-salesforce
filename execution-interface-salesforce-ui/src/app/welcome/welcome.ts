import { IUserData } from "./user";
import { IMenu } from "../menu-button/menu";

/**
 * Model object for welcome page information
 */
export interface IWelcome {
    /**
     * holds the menu items
     */
    menu: IMenu[];
    /**
     * holds the user data
     */
    userData: IUserData;
}