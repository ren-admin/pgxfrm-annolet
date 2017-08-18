;;;  Incremental copying and tangling of org files to build directory 

;;;  In dired mode P to push files to build/code directory
;;;  In dired mode T to tangle org files and push the tangled code to
;;;  build/code directory

;;; Example: If you are in dired mode in directory prj/src and mark 
;;;   the files 
;;;   prj/src/file1.py and
;;;   prj/src/file2.py
;;; 
;;; and then hit P, they get copied to 
;;;   prj/build/code


;;; Example: If you are in dired mode in directory prj/src and mark
;;;   file1.org and file2.org, and these files tangle out file1.py and file2.py

;;; then hit T, they get copied to 
;;; They get copied to 
;;;   prj/build/code/file1.py
;;;   prj/build/code/file2.py
 

;;; Usage:
;;; Put this file in your load path and include the following in your
;;; emacs init file. 

;;; (require 'incr-build)

(defun dired-push-to-build-code ()
  (interactive)
  "Copy marked files in src to corresponding build/code directory if it exists"
  (let ((fns (dired-get-marked-files t)))
	(rsync-files-to-build-code fns)))

(defun dired-tangle-to-build-code ()
  (interactive)
  "Tangle marked org files and rsync the tangled files to build/code directory if it exists"
  (let ((tangled-fns (mapcan 'org-babel-tangle-file
							 (dired-get-marked-files t))))
	(rsync-files-to-build-code tangled-fns)
	(revert-buffer)))


(defun rsync-files-to-build-code (fns)
  "Rsync files in src to corresponding build/code directory if it exists"
  (let ((dir (dired-current-directory)))
	(if (string-match "/src/" dir)
		(progn
		  (let ((dest (replace-regexp-in-string "/src/" "/build/code/" dir)))
			(let ((cmd (concat "rsync -a * " dest)))
			  (print cmd)
			  (dired-do-shell-command cmd nil fns)
			  )))
	  (error "you are probably not in a src directory"))))

(require 'dired)
(define-key dired-mode-map "P" 'dired-push-to-build-code)
(define-key dired-mode-map "T" 'dired-tangle-to-build-code)
		
		


(provide 'incr-build)
