;; Additional dired operations
;; Author:  Venkatesh Choppella  choppell@iiitmk.ac.in
;; Date:   Jan 2004

;;(require 'pathname)


(defun dired-trash-files ()
  "trashes selected files"
  (interactive)
  (let ((fns (dired-get-marked-files t)))
    (dired-do-shell-command "/home/choppell/bin/trash" nil fns)
    ))


(defun dired-acroread-file ()
  "Read pdf file at line using acrobat reader"
  (interactive)
  (let ((file-name (dired-get-filename)))
    (cd-buffer-dir-and-run-shell-command 
     (concat "ac " file-name " &"))))

(defun dired-rsync-to-build-code ()
  (interactive)
  "Copy marked files in src to corresponding build/code directory if it exists"
  (let ((fns (dired-get-marked-files t)))
	(let ((dir (dired-current-directory)))
	  (if (string-match "/src/" dir)
		  (progn
			(let ((dest (replace-regexp-in-string "/src/" "/build/code/" dir)))

			  (let ((cmd (concat "rsync -a * " dest)))
				(print cmd)
				(dired-do-shell-command cmd nil fns)
				)))
		(error "you are probably not in a src directory")))))
		
		


