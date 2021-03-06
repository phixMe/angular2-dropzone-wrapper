export interface DropzoneConfigInterface {
  server?: string,
  params?: string,

  autoReset?: number,
  errorReset?: number,
  cancelReset?: number,

  url?: string,
  method?: string,
  headers?: any,

  init?: any,
  accept?: any,
  fallback?: any,
  renameFilename?: any,
  previewsContainer?: any,
  hiddenInputContainer?: any,

  clickable?: boolean,
  paramName?: string,
  maxFiles?: number,
  maxFilesize?: number,
  filesizeBase?: number,
  acceptedFiles?: string,
  forceFallback?: boolean,
  addRemoveLinks?: boolean,
  uploadMultiple?: boolean,
  parallelUploads?: number,
  thumbnailWidth?: number,
  thumbnailHeight?: number,
  previewTemplate?: string,
  autoProcessQueue?: boolean,
  maxThumbnailFilesize?: number,
  createImageThumbnails?: boolean,

  // TODO: Remove once proper localization support is added...

  dictDefaultMessage?: string,
  dictFallbackMessage?: string,

  dictFileTooBig?: string,
  dictResponseError?: string,
  dictInvalidFileType?: string,

  dictRemoveFile?: string,
  dictCancelUpload?: string,
  dictFallbackText?: string,
  dictMaxFilesExceeded?: string,
  dictCancelUploadConfirmation?: string
}

export class DropzoneConfig implements DropzoneConfigInterface {
  server: string;
  params: string;

  autoReset: number;
  errorReset: number;
  cancelReset: number;

  url: string;
  method: string;
  headers: any;

  init: any;
  accept: any;
  fallback: any;
  renameFilename: any;
  previewsContainer: any;
  hiddenInputContainer: any;

  clickable: boolean;
  paramName: string;
  maxFiles: number;
  maxFilesize: number;
  filesizeBase: number;
  acceptedFiles: string;
  forceFallback: boolean;
  addRemoveLinks: boolean;
  uploadMultiple: boolean;
  parallelUploads: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
  previewTemplate: string;
  autoProcessQueue: boolean;
  maxThumbnailFilesize: number;
  createImageThumbnails: boolean;

  // TODO: Remove once proper localization support is added...

  dictDefaultMessage: string;
  dictFallbackMessage: string;

  dictFileTooBig: string;
  dictResponseError: string;
  dictInvalidFileType: string;

  dictRemoveFile: string;
  dictCancelUpload: string;
  dictFallbackText: string;
  dictMaxFilesExceeded: string;
  dictCancelUploadConfirmation: string;

  constructor(config: DropzoneConfigInterface = {}) {
    this.assign(config);
  }

  public assign(config: DropzoneConfigInterface = {}) {
    for (var key in config) {
      this[key] = config[key];
    }

    if (this.server) {
      this.url = this.server + (this.params ? ('?' + this.params) : '');
    }
  }
}
