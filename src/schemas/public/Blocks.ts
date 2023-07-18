// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.blocks */
export type BlocksId = number & { __brand: 'BlocksId' };

/** Represents the table public.blocks */
export default interface Blocks {
  id: BlocksId;

  owner: string;

  object_id: string;

  payload: unknown;

  fetch: number;

  created_at: Date;

  last_edited_time: Date;
}

/** Represents the initializer for the table public.blocks */
export interface BlocksInitializer {
  /** Default value: nextval('blocks_id_seq'::regclass) */
  id?: BlocksId;

  owner: string;

  object_id: string;

  payload: unknown;

  /** Default value: 0 */
  fetch?: number;

  created_at: Date;

  last_edited_time: Date;
}

/** Represents the mutator for the table public.blocks */
export interface BlocksMutator {
  id?: BlocksId;

  owner?: string;

  object_id?: string;

  payload?: unknown;

  fetch?: number;

  created_at?: Date;

  last_edited_time?: Date;
}
