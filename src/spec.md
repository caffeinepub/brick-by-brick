# Specification

## Summary
**Goal:** Manually export the entire `frontend/src/components` folder as a ZIP-ready, file-by-file bundle output.

**Planned changes:**
- Output every file under `frontend/src/components/**` one by one, preserving exact relative paths starting at `frontend/src/components/...`.
- Ensure each file’s contents are included completely and unmodified.
- Exclude any files outside `frontend/src/components` from this export batch.

**User-visible outcome:** A developer can reconstruct the full `frontend/src/components` directory locally (including subfolders like `auth/`, `layout/`, `projects/`, `screenplay/`) from the provided per-file outputs.
