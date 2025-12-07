-- CreateTable
CREATE TABLE "Teacher" (
    "tid" TEXT NOT NULL PRIMARY KEY,
    "tfullname" TEXT NOT NULL,
    "tsubject" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "sid" TEXT NOT NULL PRIMARY KEY,
    "sfullname" TEXT NOT NULL,
    "semail" TEXT NOT NULL,
    "sgender" TEXT NOT NULL,
    "sphonenumber" TEXT NOT NULL,
    "teacherTid" TEXT NOT NULL,
    CONSTRAINT "Student_teacherTid_fkey" FOREIGN KEY ("teacherTid") REFERENCES "Teacher" ("tid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_semail_key" ON "Student"("semail");

-- CreateIndex
CREATE UNIQUE INDEX "Student_sphonenumber_key" ON "Student"("sphonenumber");
