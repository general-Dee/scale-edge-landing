export function Footer() {
  return (
    <footer className="py-10 border-t border-se-border text-center text-se-muted-text text-sm bg-se-surface">
      <div className="container-custom">
        <p className="text-se-ink font-medium">Scale-Edge Marketing LTD</p>
        <p className="mt-1">Done-for-you LinkedIn marketing for local service businesses.</p>
        <p className="mt-4">
          <a href="#email-capture" className="text-se-orange underline underline-offset-4">
            Not ready to talk? Get the free LinkedIn Content Checklist →
          </a>
        </p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} Scale-Edge Marketing LTD. All rights reserved.</p>
      </div>
    </footer>
  )
}
