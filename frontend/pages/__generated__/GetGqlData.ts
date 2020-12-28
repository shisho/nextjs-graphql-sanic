/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Episode } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetGqlData
// ====================================================

export interface GetGqlData_human_friends {
  __typename: "Human" | "Droid";
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface GetGqlData_human {
  __typename: "Human";
  /**
   * The name of the human.
   */
  name: string | null;
  /**
   * Which movies they appear in.
   */
  appearsIn: (Episode | null)[] | null;
  /**
   * The friends of the human, or an empty list if they have none.
   */
  friends: (GetGqlData_human_friends | null)[] | null;
}

export interface GetGqlData_droid {
  __typename: "Droid";
  /**
   * The name of the droid.
   */
  name: string | null;
}

export interface GetGqlData {
  human: GetGqlData_human | null;
  droid: GetGqlData_droid | null;
}
