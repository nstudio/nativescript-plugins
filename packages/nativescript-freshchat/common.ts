import { Observable } from '@nativescript/core';
export interface FreshchatFAQOptions {
  showFaqCategoriesAsGrid?: boolean // Show FAQ in grid formal, false to list view
  showContactUsOnFaqScreens?: boolean // Show chat option from FAQ section
  showContactUsOnFaqNotHelpful?: boolean // Show contact us in article detail when user select Not Helpful
  showContactUsOnAppBar?: boolean // Show chat option over navigation bar in FAQ category view or article list view
  filterByTags?: {
    tags: Array<any>
    title: string
    type: 'ARTICLE'|'CATEGORY'
  }
  filterContactUsBytags?: {
    tags: Array<any>
    title: string
  }
}

export class NativescriptFreshchatCommon extends Observable {
  public static hasInit: boolean;
  public static hasntInitErrorMessage: string = 'You must call `init` before invoking this method.';

  public static checkInit(): boolean {
    if (!NativescriptFreshchatCommon.hasInit) {
      console.log(NativescriptFreshchatCommon.hasntInitErrorMessage);
      return false
    } else {
      return true;
    }
  }
}
