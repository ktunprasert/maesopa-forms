import type { Record } from "pocketbase";

export type Expandable = {
  expand: {
    category?: Category;
    shops?: Shop[];
    templates?: Template[];
    products?: Product[];
  }
};

export type RecordExpandable = Record & Expandable;

export type Shop = {
  name: string;
} & RecordExpandable;

export type Category = {
  name: string;
} & RecordExpandable;

export type Template = {
  name: string;
} & RecordExpandable;

export type Product = {
  name: string;
  internal: string;

  unit: string;
  source: string;

  shops: string[];
  category: string;
  templates: string[];
} & RecordExpandable;
