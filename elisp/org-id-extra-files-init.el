;;; set up the org-id-extra-files to include all org files in the
;;; git project. 
;;; Author:  Venkatesh Choppella <choppell@gmail.com>

;;; Evaluate this buffer using M-x eval-buffer or C-c C-b

(require 'find-lisp)
(defvar top-dir (locate-dominating-file default-directory ".git"))
(setq org-id-track-globally t)
(setq org-id-extra-files (find-lisp-find-files top-dir "\\.org$"))

