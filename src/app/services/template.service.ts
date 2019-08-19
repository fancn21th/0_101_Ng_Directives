import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>();

  constructor() {}
}
