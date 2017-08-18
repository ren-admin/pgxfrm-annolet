;;; Venkatesh Choppella
;;; Jun '01

(require 'comint)
(defun cd-buffer-dir-and-run-shell-command (&optional com)
"Switches to the *shell* buffer and runs shell command after running \"cd <dir>\" where <dir> is the directory of the current buffer"
  (interactive "s")
  (let* ((dir (expand-file-name default-directory))
         ; the current buffer's directory ^^^^
	 ;; neutralize whitespace in directory names
	 (tmp-cmd (concat "cd " "\"" dir "\""))
	 (cmd (concat tmp-cmd "; " com)))
    (with-current-buffer 
;      (shell   ;; this creates a shell in a buffer 
      (get-buffer-create "*shell*") ; this only creates the buffer
;	  ) 

;; In the above shell is commented because otherwise the the original
	  ;; buffer is buried and the screen splits into two with the
	  ;; *shell*  buffers. 

      ;; append the command to the shell buffer and run it
      (goto-char (point-max)) 
      (insert cmd)
      (comint-send-input)
      ;; set the shell buffer's default-directory to DIR
      (cd dir))
    (switch-to-buffer-other-window (get-buffer "*shell*"))
    (goto-char (point-max))))

(defun cd-buffer-dir ()
"Switches to the *shell* buffer after running \"cd <dir>\" where <dir> is the directory of the current buffer"
  (interactive)
  (cd-buffer-dir-and-run-shell-command ""))
