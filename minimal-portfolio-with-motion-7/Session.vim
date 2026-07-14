let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
doautoall SessionLoadPre
let VM_case_setting = ""
let VM_disable_syntax_in_imode =  0 
let VM_mouse_mappings =  0 
let VM_debug =  0 
let VM_default_mappings =  1 
let VM_persistent_registers =  0 
let VM_check_mappings =  1 
let VM_live_editing =  1 
let NetrwTopLvlMenu = "Netrw."
let VM_use_python =  0 
let VM_reselect_first =  0 
let VM_highlight_matches = "underline"
let NetrwMenuPriority =  80 
let VM_use_first_cursor_in_line =  0 
silent only
silent tabonly
cd ~/Developments/tutorials/framerMotion/minimal-portfolio-with-motion-7
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess+=aoO
badd +1 ~/Developments/tutorials/framerMotion/minimal-portfolio-with-motion-7
badd +1 app/page.tsx
badd +18 app/layout.tsx
badd +13 app/components/container.tsx
badd +1 lib/utils.ts
badd +1 app/globals.css
badd +19 package.json
badd +3 .prettierrc.json
badd +45 app/components/navbar/index.tsx
badd +27 app/components/projects.tsx
badd +6 ~/Developments/tutorials/tailwindCSSv4/css-property-7/app/page.tsx
badd +1 next.config.ts
badd +1 ~/Developments/tutorials/framerMotion/minimal-portfolio-with-motion-7/app/blog/tailwindcss-basics/page.tsx
badd +7 data/tailwindcss-basics.mdx
badd +1 app/blog/page.tsx
badd +15 app/blog/slug/page.tsx
badd +10 app/blog/\[slug]/page.tsx
badd +13 app/utils/mdx.ts
badd +0 app/data/tailwindcss-basics.mdx
argglobal
%argdel
$argadd ~/Developments/tutorials/framerMotion/minimal-portfolio-with-motion-7
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit app/utils/mdx.ts
argglobal
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 2 - ((1 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 2
normal! 05|
tabnext
edit app/blog/\[slug]/page.tsx
argglobal
balt app/utils/mdx.ts
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
10
sil! normal! zo
24
sil! normal! zo
36
sil! normal! zo
37
sil! normal! zo
38
sil! normal! zo
let s:l = 32 - ((25 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 32
normal! 0
tabnext
edit app/blog/page.tsx
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt ~/Developments/tutorials/framerMotion/minimal-portfolio-with-motion-7/app/blog/tailwindcss-basics/page.tsx
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 1 - ((0 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 055|
tabnext 3
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
