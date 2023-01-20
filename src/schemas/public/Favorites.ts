// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { UsersId } from './Users';

/** Represents the table public.favorites */
export default interface Favorites {
  owner: UsersId;

  object_id: string;

  type: string;
}

/** Represents the initializer for the table public.favorites */
export interface FavoritesInitializer {
  owner: UsersId;

  object_id: string;

  type: string;
}

/** Represents the mutator for the table public.favorites */
export interface FavoritesMutator {
  owner?: UsersId;

  object_id?: string;

  type?: string;
}
