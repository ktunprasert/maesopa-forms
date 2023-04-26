import type { Record } from "pocketbase";

export type Shop = {
  name: string;
} & Record;

export type Category = {
  name: string;
} & Record;

export type Template = {
  name: string;
} & Record;

export type Product = {
  name: string;
  internal: string;

  unit: string;
  source: string;

  shops: string[];
  category: string;
  templates: string[];
} & Record;
