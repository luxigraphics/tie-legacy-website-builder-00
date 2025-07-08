
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'news' | 'update';
}

const NewsManager = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'New Online Legal Services Launched',
      content: 'We have launched comprehensive online legal services for property matters.',
      date: '2024-06-10',
      type: 'news'
    },
    {
      id: '2',
      title: 'Updated Stamp Duty Calculator',
      content: 'Our stamp duty calculator has been updated with latest rates.',
      date: '2024-06-08',
      type: 'update'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'news' as 'news' | 'update'
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing item
      setNewsItems(prev => prev.map(item => 
        item.id === editingId 
          ? { ...item, ...formData }
          : item
      ));
      toast({
        title: "Updated Successfully",
        description: "News item has been updated.",
      });
    } else {
      // Add new item
      const newItem: NewsItem = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      setNewsItems(prev => [newItem, ...prev]);
      toast({
        title: "Added Successfully",
        description: "New news item has been added.",
      });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', type: 'news' });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (item: NewsItem) => {
    setFormData({
      title: item.title,
      content: item.content,
      type: item.type
    });
    setIsEditing(true);
    setEditingId(item.id);
  };

  const handleDelete = (id: string) => {
    setNewsItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Deleted Successfully",
      description: "News item has been deleted.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Add/Edit Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            {isEditing ? 'Edit News Item' : 'Add News Item'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter news title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'news' | 'update' }))}
                  className="w-full p-2 border border-border rounded-md"
                >
                  <option value="news">News</option>
                  <option value="update">Update</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Enter news content"
                rows={4}
                required
              />
            </div>
            <div className="flex gap-4">
              <Button type="submit">
                {isEditing ? 'Update' : 'Add'} News Item
              </Button>
              {isEditing && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* News Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Existing News & Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'news' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {item.type.toUpperCase()}
                      </span>
                      <div className="flex items-center ml-4 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManager;
