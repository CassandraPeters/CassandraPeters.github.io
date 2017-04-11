use strict;
use warnings;
 
my $filename = 'data.txt';
open(my $fh, '<:encoding(UTF-8)', $filename)
  or die "Could not open file '$filename' $!";
  
my $filename2 = "names.txt";
open(my $fh2, '>', $filename2)
  or die "Could not open file '$filename2' $!";
 
#print $fh2 "var ingredients = [\n";
while (my $row = <$fh>) {
  chomp $row;
  my @items = split(/ /, $row);
  my $temp = 13;
  my $name = $items[12];
  #print $#items;
  while ($temp <= $#items) {
	$name .= ' ' . $items[$temp];
	$temp = $temp + 1;
  }
  my $type = $items[0];
  my $effect = $items[1];
  my $level = $items[3];
  my $length = substr $items[4], 1;
  my $hearts = $items[6];
  my $critchance = substr $items[8], 0, length($items[8]) - 1;
  print "Name: ",$name,"\n",$type, ", ",$effect, ", Lvl ",$level, ", ",$length, " seconds, ",$hearts, " hearts, ",$critchance, "%\n\n";
  $name =~ s/'/''/;
  #print $fh2 "\t{name:\"$name\", type:\"$type\", effect:\"$effect\", level:$level, duration:$length, hearts:$hearts, critChance:$critchance},\n";
  print $fh2 $name, "\n";
}
print $fh2 "];";
close $fh;
close $fh2;